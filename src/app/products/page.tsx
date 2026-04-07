'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/config'

const filters = ['All', 'Energy', 'Fresh Series', 'Classic Series', 'Mojito Series', 'Zero Series']

export default function ProductsPage() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All'
    ? products
    : products.filter(p => p.tag.toLowerCase().includes(active.toLowerCase().replace(' series', '').replace('energy', 'energy')))

  return (
    <main style={{ paddingTop: 72 }}>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: siteConfig.url },
        { name: 'Products', url: `${siteConfig.url}/products` },
      ]} />
      {/* HERO */}
      <div className="pg-products-hero">
        <span className="section-label">Full Product Line</span>
        <h1 className="section-title pg-products-title">
          Choose Your <span>Power</span>
        </h1>
        <p className="pg-products-sub">
          Eight performance-engineered energy drinks. One iconic brand.<br className="pg-products-br" />
          Click any product to explore and place your dealer order.
        </p>

        {/* Filter Tabs */}
        <div className="pg-filter-bar">
          {filters.map(f => (
            <button
              key={f}
              className={`pg-filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="pg-product-count">
          <span style={{ color: 'var(--neon)' }}>{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''} available
        </div>
      </div>

      {/* GRID */}
      <div className="pg-grid-section">
        <div className="pg-products-grid">
          {filtered.map((p, i) => (
            <Link
              key={p.id}
              href={`/products/${p.id}`}
              className="pg-card"
              style={{ '--card-color': p.color, '--card-glow': p.color + '33', animationDelay: `${i * 0.07}s` } as React.CSSProperties}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Glow orb */}
              <div className="pg-card-orb" style={{ background: `radial-gradient(ellipse, ${p.color}22, transparent 70%)` }} />

              {/* Top accent line */}
              <div className="pg-card-accent" style={{ background: p.color }} />

              {/* Image zone */}
              <div className="pg-card-img-wrap">
                <div
                  className="pg-card-img-glow"
                  style={{ background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${p.color}40, transparent 70%)` }}
                />
                <Image
                  src={p.image}
                  alt={p.name}
                  width={180}
                  height={260}
                  className={`pg-card-img${hovered === p.id ? ' hovered' : ''}`}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Info */}
              <div className="pg-card-body">
                <div className="pg-card-series" style={{ color: p.color }}>{p.series}</div>
                <div className="pg-card-name">{p.name}</div>

                <div
                  className="pg-card-badge"
                  style={{ background: p.usecaseBg, color: p.usecaseColor, border: `1px solid ${p.usecaseBorder}` }}
                >
                  {p.usecase}
                </div>

                <div className="pg-card-desc">{p.desc.slice(0, 100)}…</div>

                {/* Specs row */}
                <div className="pg-card-specs">
                  {p.specs.slice(0, 2).map(s => (
                    <div key={s.label} className="pg-spec">
                      <span className="pg-spec-label">{s.label}</span>
                      <span className="pg-spec-val" style={{ color: p.color }}>{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="pg-card-cta" style={{ background: p.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" width={13} height={13}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  View & Order
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="pg-empty">
            <span>No products found for this filter.</span>
            <button className="pg-filter-btn active" onClick={() => setActive('All')} style={{ marginTop: '1rem' }}>Show All</button>
          </div>
        )}
      </div>

      {/* CTA STRIP */}
      <div className="pg-cta-strip">
        <div className="pg-cta-text">
          <span className="section-label" style={{ display: 'block', marginBottom: '.4rem' }}>Become a Dealer</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '.5rem' }}>
            Ready to stock <span>BIOBRUST</span>?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Get exclusive dealer pricing, marketing support, and territory rights.</p>
        </div>
        <Link href="/contact" className="btn-lg btn-lg-primary">
          <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          Enquire Now
        </Link>
      </div>

      <Footer />
    </main>
  )
}
