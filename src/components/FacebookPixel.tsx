'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { analyticsConfig } from '@/lib/config'

export default function FacebookPixel() {
  if (!analyticsConfig.fb.enabled) return null

  const { pixelId } = analyticsConfig.fb

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

export function FacebookPixelPageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!analyticsConfig.fb.enabled) return
    if (typeof window !== 'undefined' && typeof (window as Window & { fbq?: (...a: unknown[]) => void }).fbq === 'function') {
      (window as Window & { fbq: (...a: unknown[]) => void }).fbq('track', 'PageView')
    }
  }, [pathname, searchParams])

  return null
}

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: unknown
  }
}

export function fbEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params)
  }
}

export function fbCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName, params)
  }
}

// ─── Standard Facebook Pixel Events ────────────────────────────────────────

export function fbViewContent(params: { content_name: string; content_ids?: string[]; content_type?: string; value?: number; currency?: string }) {
  fbEvent('ViewContent', { currency: 'INR', ...params })
}

export function fbAddToCart(params: { content_name: string; content_ids?: string[]; value?: number }) {
  fbEvent('AddToCart', { currency: 'INR', ...params })
}

export function fbInitiateCheckout(params?: { content_ids?: string[]; num_items?: number; value?: number }) {
  fbEvent('InitiateCheckout', { currency: 'INR', ...params })
}

export function fbPurchase(params: { value: number; content_ids?: string[]; num_items?: number }) {
  fbEvent('Purchase', { currency: 'INR', ...params })
}

export function fbLead(params?: { content_name?: string }) {
  fbEvent('Lead', params)
}

export function fbContact() {
  fbEvent('Contact')
}

export function fbCompleteRegistration(params?: { content_name?: string }) {
  fbEvent('CompleteRegistration', params)
}

export function fbSearch(params: { search_string: string }) {
  fbEvent('Search', params)
}
