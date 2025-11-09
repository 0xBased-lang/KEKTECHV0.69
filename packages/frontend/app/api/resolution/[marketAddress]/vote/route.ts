/**
 * KEKTECH 3.0 - Resolution Voting API
 * POST /api/resolution/[marketAddress]/vote
 * GET /api/resolution/[marketAddress]/vote
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET - Get resolution votes for a market
export async function GET(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;

    // Get all resolution votes
    const votes = await prisma.resolutionVote.findMany({
      where: { marketAddress },
      orderBy: { timestamp: 'desc' },
    });

    const agreeCount = votes.filter((v) => v.vote === 'agree').length;
    const disagreeCount = votes.filter((v) => v.vote === 'disagree').length;
    const total = votes.length;

    // Calculate percentages
    const agreePercentage = total > 0 ? (agreeCount / total) * 100 : 0;
    const disagreePercentage = total > 0 ? (disagreeCount / total) * 100 : 0;

    // Get user's vote if authenticated
    const userId = request.headers.get('x-wallet-address');
    const userVote = userId
      ? votes.find((v) => v.userId === userId)
      : null;

    return NextResponse.json({
      success: true,
      data: {
        agreeCount,
        disagreeCount,
        total,
        agreePercentage,
        disagreePercentage,
        userVote: userVote ? { vote: userVote.vote, comment: userVote.comment } : null,
        votes: votes.map((v) => ({
          userId: v.userId,
          vote: v.vote,
          comment: v.comment,
          timestamp: v.timestamp,
        })),
      },
    });
  } catch (error) {
    console.error('Error fetching resolution votes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch votes' },
      { status: 500 }
    );
  }
}

// POST - Submit a resolution vote with mandatory comment
export async function POST(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;
    const body = await request.json();
    const { userId, vote, comment } = body;

    // Validate input
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (vote !== 'agree' && vote !== 'disagree') {
      return NextResponse.json(
        { success: false, error: 'Vote must be "agree" or "disagree"' },
        { status: 400 }
      );
    }

    if (!comment || comment.trim().length < 20) {
      return NextResponse.json(
        { success: false, error: 'Comment is required (minimum 20 characters)' },
        { status: 400 }
      );
    }

    // Check if user already voted
    const existingVote = await prisma.resolutionVote.findUnique({
      where: {
        marketAddress_userId: {
          marketAddress,
          userId,
        },
      },
    });

    if (existingVote) {
      return NextResponse.json(
        { success: false, error: 'You have already voted on this resolution' },
        { status: 400 }
      );
    }

    // Create the resolution vote
    const result = await prisma.resolutionVote.create({
      data: {
        marketAddress,
        userId,
        vote,
        comment: comment.trim(),
      },
    });

    // Also create a comment entry (type: resolution_vote)
    await prisma.comment.create({
      data: {
        marketAddress,
        userId,
        comment: comment.trim(),
        type: 'resolution_vote',
      },
    });

    // Track user activity
    await prisma.userActivity.create({
      data: {
        userId,
        activityType: 'resolution_vote',
        marketAddress,
      },
    });

    // Get updated vote counts
    const votes = await prisma.resolutionVote.findMany({
      where: { marketAddress },
    });

    const agreeCount = votes.filter((v) => v.vote === 'agree').length;
    const disagreeCount = votes.filter((v) => v.vote === 'disagree').length;
    const total = votes.length;

    return NextResponse.json({
      success: true,
      data: {
        vote: result,
        agreeCount,
        disagreeCount,
        total,
        agreePercentage: (agreeCount / total) * 100,
        disagreePercentage: (disagreeCount / total) * 100,
      },
    });
  } catch (error) {
    console.error('Error submitting resolution vote:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit vote' },
      { status: 500 }
    );
  }
}
