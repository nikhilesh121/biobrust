import Script from 'next/script'
import { analyticsConfig } from '@/lib/config'

export default function GoogleAnalytics() {
  if (!analyticsConfig.ga.enabled) return null

  const { measurementId } = analyticsConfig.ga
  const gadsEnabled = analyticsConfig.gads.enabled
  const { conversionId } = analyticsConfig.gads

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
          ${gadsEnabled && conversionId ? `gtag('config', '${conversionId}');` : ''}
        `}
      </Script>
    </>
  )
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export function gtagEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}

export function gtagConversion(label: string, value?: number) {
  const { conversionId } = analyticsConfig.gads
  if (!conversionId || !label) return
  gtagEvent('conversion', {
    send_to: `${conversionId}/${label}`,
    ...(value !== undefined ? { value, currency: 'INR' } : {}),
  })
}
