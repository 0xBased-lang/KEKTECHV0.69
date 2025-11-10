/**
 * Security utilities for sanitizing user input
 * Protects against XSS attacks
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - Potentially unsafe HTML string
 * @returns Sanitized HTML string safe for rendering
 */
export const sanitizeHTML = (dirty: string): string => {
  if (typeof window === 'undefined') {
    // Server-side: Use isomorphic-dompurify
    return DOMPurify.sanitize(dirty, {
      ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'a'],
      ALLOWED_ATTR: ['href', 'target', 'rel'],
      ALLOW_DATA_ATTR: false,
    });
  }

  // Client-side: Use regular dompurify
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'p', 'br', 'a'],
    ALLOWED_ATTR: ['href', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
  });
};

/**
 * Sanitize plain text (strip all HTML)
 * @param text - Potentially unsafe text
 * @returns Plain text with all HTML removed
 */
export const sanitizeText = (text: string): string => {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
};

/**
 * Validate and sanitize comment text
 * @param comment - Comment text from user
 * @returns Sanitized comment text
 */
export const sanitizeComment = (comment: string): string => {
  // Strip all HTML for comments (security best practice)
  const sanitized = sanitizeText(comment);

  // Trim and limit length
  return sanitized.trim().slice(0, 1000);
};

/**
 * Sanitize market address (ensure it's a valid Ethereum address)
 * @param address - Market address
 * @returns Sanitized address or null if invalid
 */
export const sanitizeAddress = (address: string): string | null => {
  // Basic Ethereum address validation
  const addressRegex = /^0x[a-fA-F0-9]{40}$/;

  if (!addressRegex.test(address)) {
    return null;
  }

  return address.toLowerCase();
};

/**
 * Validate and sanitize URL
 * @param url - URL string
 * @returns Sanitized URL or null if invalid
 */
export const sanitizeURL = (url: string): string | null => {
  try {
    const parsed = new URL(url);

    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return null;
    }

    return parsed.toString();
  } catch {
    return null;
  }
};
