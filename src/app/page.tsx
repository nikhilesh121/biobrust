import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'
import { productImages, siteConfig } from '@/lib/config'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'BIOBRUST – Fuel Every High Performance Moment | Energy Drinks India',
  description: 'BIOBRUST premium energy drinks engineered for athletes, gamers, hustlers & nightlife. 8 powerful flavors. Pan India & International dealer distribution available.',
  alternates: { canonical: siteConfig.url },
  keywords: ['biobrust', 'energy drink india', 'best energy drink', 'performance energy drink', 'gaming energy drink', 'biobrust dealer', 'energy drink pan india', 'buy energy drink india'],
  openGraph: {
    title: 'BIOBRUST – Fuel Every High Performance Moment',
    description: 'Premium energy drinks engineered for athletes, gamers, hustlers & nightlife. 8 powerful flavors. Pan India & International distribution.',
    url: siteConfig.url,
    type: 'website',
    siteName: 'BIOBRUST',
    images: [{ url: `${siteConfig.url}/images/og-image.jpeg`, width: 1200, height: 630, alt: 'BIOBRUST Energy Drinks' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIOBRUST – Fuel Every High Performance Moment',
    description: 'Premium energy drinks engineered for athletes, gamers & hustlers. Pan India & International distribution.',
    images: [`${siteConfig.url}/images/og-image.jpeg`],
  },
}

export default function HomePage() {
  // Show complete rows only: count products per row at desktop (5 cols via auto-fill ~210px)
  // With 8 products: 5+3 is bad, so we show 5+5=10 (all) or just the first complete row set
  // Rule: if total <= perRow, show all; otherwise show floor(total/perRow)*perRow
  const perRow = 5
  const total = products.length
  const previewCount = total <= perRow ? total : Math.floor(total / perRow) * perRow
  const preview = products.slice(0, previewCount)

  return (
    <main style={{ paddingTop: 72 }}>
      <BreadcrumbJsonLd items={[{ name: 'Home', url: siteConfig.url }]} />
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Premium Energy Drink
          </div>
          <h1 className="hero-title">
            UNLOCK YOUR<span>BIO ENERGY</span>
          </h1>
          <p className="hero-sub">
            Fuel your focus, performance, gaming and nightlife. Engineered for every high-energy moment.
          </p>
          <div className="hero-btns">
            <Link href="/products" className="btn-lg btn-lg-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Explore Products
            </Link>
            <Link href="/contact" className="btn-lg btn-lg-secondary">
              Become a Dealer
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-can-wrap">
            <Image
              src={productImages.hero}
              alt="BIOBRUST Original"
              width={320}
              height={480}
              className="hero-can-img"
              priority
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat-num">8+</div>
          <div className="stat-label">Flavors</div>
        </div>
        <div className="stat">
          <div className="stat-num">250ml</div>
          <div className="stat-label">Premium Can</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">Bio Energy</div>
        </div>
        <div className="stat">
          <div className="stat-num">Pan India</div>
          <div className="stat-label">&amp; International</div>
        </div>
      </div>

      {/* PRODUCTS PREVIEW */}
      <section className="section">
        <span className="section-label">Our Line</span>
        <h2 className="section-title">Choose Your <span>Power</span></h2>
        <p className="section-sub">
          Eight distinct formulas engineered for every warrior&apos;s need — from morning focus to nightlife domination.
        </p>
        <div className="products-grid">
          {preview.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="prod-card" style={{ display: 'block' }}>
              <div className="can-display">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={120}
                  height={165}
                  style={{ objectFit: 'contain', height: 165, width: 'auto' }}
                />
              </div>
              <div className="prod-flavor">{p.tag.split('·')[1]?.trim() || p.tag}</div>
              <div className="prod-name">{p.name}</div>
              <div className="prod-desc">{p.desc.slice(0, 80)}...</div>
              <div
                className="prod-badge"
                style={{
                  background: `${p.usecaseBg}`,
                  color: p.usecaseColor,
                  border: `1px solid ${p.usecaseBorder}`,
                }}
              >
                {p.badge}
              </div>
              <div className="prod-cta-overlay">
                <div
                  className="prod-cta-btn"
                  style={{ background: p.color, borderColor: p.color }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width={10} height={10}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Order Now
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/products" className="btn-lg btn-lg-secondary" style={{ margin: '0 auto' }}>
            View All Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="about-preview">
          <div className="about-text">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">The BIOBRUST<span> Story</span></h2>
            <p className="section-sub">
              Born from a passion for performance, BIOBRUST is India&apos;s bold energy drink brand crafted for warriors — athletes, gamers, hustlers, and nightlife seekers who refuse to settle.
            </p>
            <div className="pillars">
              <div className="pillar">
                <svg viewBox="0 0 24 24" fill="#92c640" width={28} height={28} style={{ marginBottom: '.7rem' }}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                <div className="pillar-name">Pure Energy</div>
                <div className="pillar-desc">Engineered formulas with bio-active ingredients for genuine performance.</div>
              </div>
              <div className="pillar">
                <svg viewBox="0 0 24 24" fill="#92c640" width={28} height={28} style={{ marginBottom: '.7rem' }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21l1.18-6.86L2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div className="pillar-name">Premium Quality</div>
                <div className="pillar-desc">Every can meets the highest quality standards from formula to finish.</div>
              </div>
              <div className="pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="#92c640" strokeWidth={2} width={28} height={28} style={{ marginBottom: '.7rem' }}>
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l3 3"/>
                </svg>
                <div className="pillar-name">8+ Flavors</div>
                <div className="pillar-desc">From Classic to Virgin Mojito — a flavor for every battle.</div>
              </div>
              <div className="pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="#92c640" strokeWidth={2} width={28} height={28} style={{ marginBottom: '.7rem' }}>
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <div className="pillar-name">Dealer Network</div>
                <div className="pillar-desc">Growing pan-India distribution with trusted dealer partnerships.</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-circle">
              <Image
                src="/images/Logo.jpeg"
                alt="BIOBRUST Logo"
                width={200}
                height={200}
                className="about-circle-logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <div className="cta-banner">
        <div>
          <div className="cta-title">Ready to Stock BIOBRUST?</div>
          <p className="cta-sub">
            Join our nationwide dealer network. Get exclusive pricing, marketing support, and direct supply. Pan India &amp; International availability. Build your business with India&apos;s boldest energy brand.
          </p>
        </div>
        <div className="cta-btns">
          <Link href="/contact" className="btn-lg btn-lg-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Get Dealership
          </Link>
          <Link href="/products" className="btn-lg btn-lg-secondary">
            View Products
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
