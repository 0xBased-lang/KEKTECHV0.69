/**
 * KEKTECH 3.0 - Comment Section Component
 *
 * Complete comment system combining form and list
 */
'use client'

import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'
import { useComments, useCommentSubscription } from '@/lib/api/engagement'
import type { Address } from 'viem'

interface CommentSectionProps {
  marketAddress: Address
}

export function CommentSection({ marketAddress }: CommentSectionProps) {
  const {
    comments,
    isLoading,
    error,
    refetch
  } = useComments(marketAddress)

  useCommentSubscription(marketAddress, refetch)

  return (
    <div className="space-y-6">
      {/* Comment Form */}
      <CommentForm marketAddress={marketAddress} onCommentPosted={refetch} />

      {/* Comment List */}
      <CommentList
        marketAddress={marketAddress}
        comments={comments}
        isLoading={isLoading}
        error={error}
        refetch={refetch}
      />
    </div>
  )
}
