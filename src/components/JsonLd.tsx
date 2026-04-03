import { siteConfig } from '@/lib/config'

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.jpeg`,
    description: siteConfig.description,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'India',
    },
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
      siteConfig.social.twitter,
    ].filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ProductJsonLdProps {
  id: string
  name: string
  description: string
  image: string
  color: string
}

export function ProductJsonLd({ id, name, description, image, color }: ProductJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `BIOBRUST ${name}`,
    description,
    image: `${siteConfig.url}${image}`,
    url: `${siteConfig.url}/products/${id}`,
    brand: {
      '@type': 'Brand',
      name: 'BIOBRUST',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: 'IN',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'BIOBRUST',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Color',
        value: color,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
