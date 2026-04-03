import type { Metadata } from 'next'
import { getProductById } from '@/lib/products'
import { siteConfig } from '@/lib/config'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: 'Product Not Found – BIOBRUST',
      description: 'The product you are looking for does not exist.',
      robots: { index: false, follow: false },
    }
  }

  const title = `BIOBRUST ${product.name} – ${product.usecase} Energy Drink India`
  const description = `${product.desc.slice(0, 150)}. Available for dealer orders across India.`
  const url = `${siteConfig.url}/products/${product.id}`
  const imageUrl = `${siteConfig.url}${product.image}`

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      `biobrust ${product.name.toLowerCase()}`,
      `${product.name.toLowerCase()} energy drink`,
      `${product.series.toLowerCase()} energy drink`,
      `biobrust dealer`,
      `energy drink india`,
      `buy ${product.name.toLowerCase()} energy drink`,
      `biobrust ${product.name.toLowerCase()} price`,
    ],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'BIOBRUST',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `BIOBRUST ${product.name} Energy Drink`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
