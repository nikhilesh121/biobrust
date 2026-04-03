import type { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'All Products – BIOBRUST Energy Drinks | 7 Flavors India',
  description: 'Explore all 7 BIOBRUST energy drink flavors – Original, Classic, Citrus, Cranberry Mojito, Ginger Ale, Tonic Water & Zero Energy. Available for dealer orders PAN India.',
  alternates: { canonical: `${siteConfig.url}/products` },
  keywords: ['biobrust products', 'energy drink flavors india', 'biobrust original', 'biobrust citrus', 'biobrust ginger ale', 'biobrust cranberry', 'energy drink dealer india', 'buy biobrust'],
  openGraph: {
    title: 'All Products – BIOBRUST Energy Drinks | 7 Flavors',
    description: 'Explore all 7 BIOBRUST energy drink flavors. Available for dealer orders PAN India.',
    url: `${siteConfig.url}/products`,
    type: 'website',
    siteName: 'BIOBRUST',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Products – BIOBRUST Energy Drinks | 7 Flavors',
    description: 'Explore all 7 BIOBRUST energy drink flavors. Available for dealer orders PAN India.',
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
