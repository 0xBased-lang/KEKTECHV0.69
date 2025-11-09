/**
 * KEKTECH 3.0 - Proposal Voting API
 * POST /api/proposals/[marketAddress]/vote
 * GET /api/proposals/[marketAddress]/vote
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET - Get vote counts for a market proposal
export async function GET(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;

    // Get all votes for this market
    const votes = await prisma.proposalVote.findMany({
      where: { marketAddress },
    });

    const likes = votes.filter((v) => v.vote === 'like').length;
    const dislikes = votes.filter((v) => v.vote === 'dislike').length;

    // Get user's vote if authenticated
    // TODO: Get user address from session/auth
    const userId = request.headers.get('x-wallet-address');
    const userVote = userId
      ? votes.find((v) => v.userId === userId)?.vote
      : null;

    return NextResponse.json({
      success: true,
      data: {
        likes,
        dislikes,
        userVote,
        total: votes.length,
      },
    });
  } catch (error) {
    console.error('Error fetching proposal votes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch votes' },
      { status: 500 }
    );
  }
}

// POST - Submit a vote for a market proposal
export async function POST(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;
    const body = await request.json();
    const { userId, vote } = body;

    // Validate input
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (vote !== 'like' && vote !== 'dislike') {
      return NextResponse.json(
        { success: false, error: 'Vote must be "like" or "dislike"' },
        { status: 400 }
      );
    }

    // Upsert the vote (update if exists, create if not)
    const result = await prisma.proposalVote.upsert({
      where: {
        marketAddress_userId: {
          marketAddress,
          userId,
        },
      },
      update: {
        vote,
        timestamp: new Date(),
      },
      create: {
        marketAddress,
        userId,
        vote,
      },
    });

    // Track user activity
    await prisma.userActivity.create({
      data: {
        userId,
        activityType: 'proposal_vote',
        marketAddress,
      },
    });

    // Get updated vote counts
    const votes = await prisma.proposalVote.findMany({
      where: { marketAddress },
    });

    const likes = votes.filter((v) => v.vote === 'like').length;
    const dislikes = votes.filter((v) => v.vote === 'dislike').length;

    return NextResponse.json({
      success: true,
      data: {
        vote: result,
        likes,
        dislikes,
        total: votes.length,
      },
    });
  } catch (error) {
    console.error('Error submitting proposal vote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit vote' },
      { status: 500 }
    );
  }
}
