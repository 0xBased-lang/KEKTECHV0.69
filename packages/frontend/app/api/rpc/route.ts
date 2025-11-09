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

const PRIMARY_RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || 'https://rpc.basedai.com';
const FALLBACK_RPC_URL = 'https://mainnet.basedaibridge.com/rpc/';

export async function POST(_request: NextRequest) {
  try {
    const body = await request.json();

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

    // Try primary RPC endpoint
    let response = await fetch(PRIMARY_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // If primary fails, try fallback
    if (!response.ok) {
      console.warn(`Primary RPC failed (${response.status}), trying fallback...`);

      response = await fetch(FALLBACK_RPC_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Both RPC endpoints failed. Status: ${response.status}`);
      }
    }

    const data = await response.json();

    // Return with proper CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('RPC Proxy Error:', error);

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
      { status: 500 }
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
