/**
 * KEKTECH 3.0 - Comments API
 * POST /api/comments/[marketAddress] - Create comment
 * GET /api/comments/[marketAddress] - Get comments
 */

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db/prisma';

// GET - Get comments for a market
export async function GET(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;
    const { searchParams } = new URL(request.url);

    const sortBy = searchParams.get('sortBy') || 'recent'; // recent, top, controversial
    const filterType = searchParams.get('type') || 'all'; // all, general, resolution_vote
    const limit = parseInt(searchParams.get('limit') || '50');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Build where clause
    const where: any = { marketAddress };
    if (filterType !== 'all') {
      where.type = filterType;
    }

    // Build order by clause
    let orderBy: any = { timestamp: 'desc' }; // default: recent
    if (sortBy === 'top') {
      orderBy = { upvotes: 'desc' };
    } else if (sortBy === 'controversial') {
      // TODO: Implement controversial sorting algorithm
      // For now, sort by comment count (upvotes + downvotes)
      orderBy = [{ upvotes: 'desc' }, { downvotes: 'desc' }];
    }

    // Fetch comments
    const comments = await prisma.comment.findMany({
      where,
      orderBy,
      take: limit,
      skip: offset,
    });

    // Get total count
    const total = await prisma.comment.count({ where });

    return NextResponse.json({
      success: true,
      data: {
        comments: comments.map((c) => ({
          id: c.id,
          userId: c.userId,
          comment: c.comment,
          upvotes: c.upvotes,
          downvotes: c.downvotes,
          type: c.type,
          timestamp: c.timestamp,
        })),
        total,
        limit,
        offset,
      },
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

// POST - Create a new comment
export async function POST(
  request: NextRequest,
  { params }: { params: { marketAddress: string } }
) {
  try {
    const { marketAddress } = params;
    const body = await request.json();
    const { userId, comment } = body;

    // Validate input
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'User ID is required' },
        { status: 400 }
      );
    }

    if (!comment || comment.trim().length < 1) {
      return NextResponse.json(
        { success: false, error: 'Comment cannot be empty' },
        { status: 400 }
      );
    }

    if (comment.length > 1000) {
      return NextResponse.json(
        { success: false, error: 'Comment is too long (max 1000 characters)' },
        { status: 400 }
      );
    }

    // Create the comment
    const result = await prisma.comment.create({
      data: {
        marketAddress,
        userId,
        comment: comment.trim(),
        type: 'general',
      },
    });

    // Track user activity
    await prisma.userActivity.create({
      data: {
        userId,
        activityType: 'comment',
        marketAddress,
      },
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}
