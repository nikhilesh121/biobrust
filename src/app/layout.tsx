import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import FacebookPixel from '@/components/FacebookPixel'
import AnalyticsPageTracker from '@/components/AnalyticsPageTracker'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: ['energy drink', 'biobrust', 'performance drink', 'gaming energy', 'dealer', 'india energy drink', 'caffeine drink', 'energy drink india', 'best energy drink', 'biobrust dealer', 'pan india energy drink'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: siteConfig.url },
  category: 'food & beverage',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: parseInt(siteConfig.seo.ogImageWidth),
        height: parseInt(siteConfig.seo.ogImageHeight),
        alt: `${siteConfig.name} – ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.seo.ogImage],
  },
  other: {
    ...(siteConfig.seo.fbAppId ? { 'fb:app_id': siteConfig.seo.fbAppId } : {}),
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content={siteConfig.theme.color} />
        <meta name="msapplication-TileColor" content={siteConfig.theme.color} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="BIOBRUST" />
        <link rel="manifest" href="/manifest.json" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body>
        <GoogleAnalytics />
        <FacebookPixel />
        <AnalyticsPageTracker />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
