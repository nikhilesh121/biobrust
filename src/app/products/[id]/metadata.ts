import type { Metadata } from 'next'
import { getProductById } from '@/lib/products'
import { siteConfig } from '@/lib/config'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: 'Product Not Found – BIOBRUST',
      robots: { index: false, follow: false },
    }
  }

  const title = `BIOBRUST ${product.name} – ${product.usecase} Energy Drink`
  const description = `${product.desc.slice(0, 155)}…`
  const url = `${siteConfig.url}/products/${product.id}`
  const imageUrl = `${siteConfig.url}${product.image}`

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: [
      `biobrust ${product.name.toLowerCase()}`,
      `${product.name.toLowerCase()} energy drink`,
      `${product.series.toLowerCase()}`,
      `biobrust dealer`,
      `energy drink india`,
      `buy energy drink`,
    ],
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 800,
          alt: `BIOBRUST ${product.name}`,
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
