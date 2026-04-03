import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Contact BIOBRUST – Become a Dealer | PAN India Distribution',
  description: 'Interested in becoming a BIOBRUST dealer? Contact us for exclusive dealer pricing, territory rights, and marketing support across India.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  keywords: ['biobrust dealer', 'energy drink dealer india', 'biobrust contact', 'biobrust distributor', 'biobrust wholesale', 'energy drink franchise india'],
  openGraph: {
    title: 'Contact BIOBRUST – Become a Dealer',
    description: 'Get exclusive dealer pricing, territory rights, and marketing support. Join the BIOBRUST dealer network across India.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
    siteName: 'BIOBRUST',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact BIOBRUST – Become a Dealer',
    description: 'Get exclusive dealer pricing and territory rights. Join the BIOBRUST dealer network.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
