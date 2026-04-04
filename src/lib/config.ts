// =============================================================================
// BIOBRUST — Central Config
// All values read from .env.local — change settings there, not here.
// =============================================================================

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'BIOBRUST',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE ?? 'Fuel Every High Performance Moment',
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'Premium energy drinks engineered for athletes, gamers, hustlers, and nightlife seekers.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://biobrust.com',

  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@biobrust.com',
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+91 90000 00000',
    whatsapp: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? '+91 90000 00000',
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? 'India — PAN India Distribution',
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? 'https://instagram.com/biobrust',
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK ?? 'https://facebook.com/biobrust',
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? 'https://youtube.com/@biobrust',
    twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER ?? 'https://twitter.com/biobrust',
  },

  theme: {
    color: process.env.NEXT_PUBLIC_THEME_COLOR ?? '#92c640',
    primary: process.env.NEXT_PUBLIC_BRAND_PRIMARY ?? '#92c640',
  },

  seo: {
    ogImage: process.env.NEXT_PUBLIC_OG_IMAGE ?? '/images/og-image.jpeg',
    ogImageWidth: process.env.NEXT_PUBLIC_OG_IMAGE_WIDTH ?? '1200',
    ogImageHeight: process.env.NEXT_PUBLIC_OG_IMAGE_HEIGHT ?? '630',
    fbAppId: process.env.NEXT_PUBLIC_FB_APP_ID ?? '',
  },
}

export const analyticsConfig = {
  ga: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '',
    enabled: !!(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX'),
  },
  fb: {
    pixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? '',
    enabled: !!(process.env.NEXT_PUBLIC_FB_PIXEL_ID && process.env.NEXT_PUBLIC_FB_PIXEL_ID !== 'XXXXXXXXXXXXXXXXXX'),
  },
  gads: {
    conversionId: process.env.NEXT_PUBLIC_GADS_CONVERSION_ID ?? '',
    labelContact: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL_CONTACT ?? '',
    labelOrder: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL_ORDER ?? '',
    enabled: !!(process.env.NEXT_PUBLIC_GADS_CONVERSION_ID && process.env.NEXT_PUBLIC_GADS_CONVERSION_ID !== 'AW-XXXXXXXXX'),
  },
}

export const emailConfig = {
  apiKey: process.env.RESEND_API_KEY ?? '',
  from: process.env.EMAIL_FROM ?? 'BIOBRUST <onboarding@resend.dev>',
  to: process.env.EMAIL_TO ?? 'ironitynews@gmail.com',
  cc: process.env.EMAIL_CC ?? '',
}

export const productImages = {
  hero: `/images/${process.env.NEXT_PUBLIC_IMG_HERO ?? 'Biobrust.png'}`,
  original: `/images/${process.env.NEXT_PUBLIC_IMG_ORIGINAL ?? '3.png'}`,
  classic: `/images/${process.env.NEXT_PUBLIC_IMG_CLASSIC ?? '4.jpeg'}`,
  citrus: `/images/${process.env.NEXT_PUBLIC_IMG_CITRUS ?? '1.jpeg'}`,
  cranberry: `/images/${process.env.NEXT_PUBLIC_IMG_CRANBERRY ?? '2.jpeg'}`,
  ginger: `/images/${process.env.NEXT_PUBLIC_IMG_GINGER ?? '5.jpeg'}`,
  tonic: `/images/${process.env.NEXT_PUBLIC_IMG_TONIC ?? '6.jpeg'}`,
  zeroSugar: `/images/${process.env.NEXT_PUBLIC_IMG_ZERO_SUGAR ?? '7.jpeg'}`,
  virjit: `/images/${process.env.NEXT_PUBLIC_IMG_VIRJIT ?? 'VirjitMojito.png'}`,
  logo: `/images/${process.env.NEXT_PUBLIC_IMG_LOGO ?? 'Logo.jpeg'}`,
}
