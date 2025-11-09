'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface HeroSectionProps {
  title: string
  description: string
  icon: ReactNode
  features?: string[]
  ctaText?: string
  ctaLink?: string
  badge?: string
  badgeVariant?: 'success' | 'warning' | 'secondary'
  ctaDisabled?: boolean
  gradient?: string
}

/**
 * HeroSection Component
 *
 * Full-screen hero section for Feels Good Markets landing page
 * Each section represents one of the three market types
 */
export function HeroSection({
  title,
  description,
  icon,
  features,
  ctaText = 'Learn More',
  ctaLink = '#',
  badge,
  badgeVariant = 'secondary',
  ctaDisabled = false,
  gradient = 'from-[#3fb8bd] to-[#2a8388]'
}: HeroSectionProps) {
  const badgeColors = {
    success: 'bg-green-500/20 text-green-400 border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    secondary: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
  }

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br ${gradient}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 flex items-center justify-center bg-black/20 rounded-full border-2 border-white/20 backdrop-blur-sm">
            {icon}
          </div>
        </div>

        {/* Badge (if provided) */}
        {badge && (
          <div className="flex justify-center mb-6">
            <span className={`px-6 py-2 rounded-full border text-sm font-semibold ${badgeColors[badgeVariant]}`}>
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-fredoka font-bold text-white mb-6">
          {title}
        </h2>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        {/* Features */}
        {features && features.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
              >
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button - Matching marketplace style */}
        {ctaDisabled ? (
          <button
            disabled
            className="px-10 py-4 bg-gray-600/50 text-gray-400 rounded-lg text-lg font-fredoka font-bold cursor-not-allowed border border-gray-700"
          >
            {ctaText}
          </button>
        ) : (
          <Link
            href={ctaLink}
            className="inline-block px-10 py-4 bg-[#3fb8bd] text-black rounded-lg text-lg font-fredoka font-bold hover:bg-[#4ecca7] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#3fb8bd]/30 hover:shadow-[#4ecca7]/30"
          >
            {ctaText}
          </Link>
        )}

        {/* Scroll indicator (only on first section) */}
        {!ctaDisabled && (
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-white/60"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
