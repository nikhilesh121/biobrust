import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const contactMetadata: Metadata = {
  title: 'Contact BIOBRUST – Become a Dealer | PAN India Distribution',
  description: 'Interested in becoming a BIOBRUST dealer? Contact us for exclusive dealer pricing, territory rights, and marketing support. PAN India distribution available.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  keywords: ['biobrust dealer', 'energy drink dealer india', 'biobrust contact', 'biobrust distributor', 'biobrust wholesale'],
  openGraph: {
    title: 'Contact BIOBRUST – Become a Dealer',
    description: 'Get exclusive dealer pricing, territory rights, and marketing support. Join the BIOBRUST dealer network.',
    url: `${siteConfig.url}/contact`,
    type: 'website',
  },
}
