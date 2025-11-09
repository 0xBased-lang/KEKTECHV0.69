'use client'

import { HeroSection } from '@/components/feels-good-markets/HeroSection'
import { BlurredTitleSection } from '@/components/ui/BlurredTitleSection'

/**
 * Feels Good Markets Landing Page
 *
 * Main landing page with 3 full-screen hero sections:
 * 1. Frog Futures (Coming Soon)
 * 2. KEK Futures (Prediction Markets - Live)
 * 3. NFT Marketplace (Existing)
 *
 * Styled to match existing marketplace design system
 */
export default function FeelsGoodMarketsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-950">
      {/* Page Header with Blurred Background - Matching Marketplace Style */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <BlurredTitleSection
          title="Feels Good Markets"
          subtitle="Welcome to the future of prediction markets"
        />
      </div>

      {/* Hero Section 1: Frog Futures (Placeholder) */}
      <HeroSection
        title="Frog Futures"
        description="Revolutionary meme prediction markets"
        icon={
          <span className="text-7xl">🐸</span>
        }
        badge="Coming Soon"
        badgeVariant="warning"
        ctaText="Learn More"
        ctaDisabled
        gradient="from-[#4ecca7] to-[#37a580]"
      />

      {/* Hero Section 2: KEK Futures (Prediction Markets) */}
      <HeroSection
        title="KEK Futures"
        description="Trade on real-world events with ultra-low fees"
        icon={
          <span className="text-7xl">📈</span>
        }
        features={[
          "$0.0001 per trade",
          "Instant settlement",
          "Live markets"
        ]}
        badge="Live Now"
        badgeVariant="success"
        ctaText="Explore Markets"
        ctaLink="/feels-good-markets/kek-futures"
        gradient="from-[#3fb8bd] to-[#2a8388]"
      />

      {/* Hero Section 3: NFT Marketplace */}
      <HeroSection
        title="NFT Marketplace"
        description="Collect exclusive KEK NFTs and earn rewards"
        icon={
          <span className="text-7xl">🖼️</span>
        }
        features={[
          "Mint",
          "Trade",
          "Earn"
        ]}
        ctaText="Browse NFTs"
        ctaLink="/feels-good-markets/nft-marketplace"
        gradient="from-purple-600 to-purple-800"
      />

      {/* Footer section with navigation help */}
      <div className="bg-black py-12 text-center border-t border-[#3fb8bd]/20">
        <p className="text-gray-400 text-sm">
          Scroll up to explore all markets • Use navigation menu for quick access
        </p>
      </div>
    </main>
  )
}
