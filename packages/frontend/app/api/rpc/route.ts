import { NextRequest, NextResponse } from 'next/server';

/**
 * RPC Proxy Route
 *
 * This API route acts as a proxy for BasedAI RPC calls to solve CORS issues.
 * When the frontend makes RPC calls from the browser, CORS headers from the
 * BasedAI RPC endpoint block the requests. By proxying through this Next.js
 * API route, we make the RPC calls server-side (no CORS restrictions) and
 * return the response to the frontend with proper CORS headers.
 */

const PRIMARY_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || 'https://mainnet.basedaibridge.com/rpc/';
const FALLBACK_RPC_URL = 'https://rpc.basedai.com'; // Old endpoint (currently down)
const RPC_TIMEOUT = 5000; // 5 seconds per request (Context7 recommendation)
const MAX_RETRIES = 2; // Retry each endpoint once

/**
 * Helper: Fetch with timeout (Context7 pattern)
 */
async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function POST(_request: NextRequest) {
  try {
    const body = await _request.json();

    // Validate RPC request has required fields
    if (!body.method || !body.jsonrpc) {
      return NextResponse.json(
        {
          jsonrpc: '2.0',
          error: { code: -32600, message: 'Invalid Request: Missing required fields' },
          id: body.id || null
        },
        { status: 400 }
      );
    }

    let lastError: Error | null = null;

    // Try primary RPC endpoint with retries
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await fetchWithTimeout(
          PRIMARY_RPC_URL,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          },
          RPC_TIMEOUT
        );

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ RPC success (primary, attempt ${attempt}):`, body.method);

          // Return with proper CORS headers
          return NextResponse.json(data, {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          });
        }

        throw new Error(`Primary RPC error: ${response.status} ${response.statusText}`);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.warn(`⚠️  Primary RPC attempt ${attempt}/${MAX_RETRIES} failed:`, lastError.message);

        if (attempt < MAX_RETRIES) {
          await new Promise(resolve => setTimeout(resolve, 500 * attempt));
        }
      }
    }

    // Try fallback RPC endpoint with retries
    console.warn('⚠️  Primary RPC exhausted, trying fallback...');
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await fetchWithTimeout(
          FALLBACK_RPC_URL,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          },
          RPC_TIMEOUT
        );

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ RPC success (fallback, attempt ${attempt}):`, body.method);

          // Return with proper CORS headers
          return NextResponse.json(data, {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'POST, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type',
            },
          });
        }

        throw new Error(`Fallback RPC error: ${response.status} ${response.statusText}`);
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        console.warn(`⚠️  Fallback RPC attempt ${attempt}/${MAX_RETRIES} failed:`, lastError.message);

        if (attempt < MAX_RETRIES) {
          await new Promise(resolve => setTimeout(resolve, 500 * attempt));
        }
      }
    }

    // All retries exhausted
    throw new Error(`All RPC endpoints failed. Last error: ${lastError?.message}`);
  } catch (error) {
    console.error('❌ RPC Proxy Error:', error);

    return NextResponse.json(
      {
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: 'Internal error: RPC request failed',
          data: error instanceof Error ? error.message : 'Unknown error'
        },
        id: null
      },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
}

// Handle OPTIONS preflight requests
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
