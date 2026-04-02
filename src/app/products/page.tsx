'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { products } from '@/lib/products'

export default function ProductsPage() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const cardWidth = 340 + 32 // card width + gap
  const visible = typeof window !== 'undefined' ? Math.floor(window.innerWidth / cardWidth) : 3
  const maxIndex = Math.max(0, products.length - 1)

  const slide = (dir: number) => {
    setCurrent((prev) => {
      const next = prev + dir
      if (next < 0) return 0
      if (next > maxIndex) return maxIndex
      return next
    })
  }

  const offset = current * cardWidth

  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-hero">
        <span className="section-label">Product Line</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          Choose Your <span>Formula</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 600, margin: '.5rem auto 0', lineHeight: 1.7 }}>
          Seven performance-engineered energy drinks. One iconic brand. Click any product to place your dealer order.
        </p>
      </div>

      <div className="products-showcase">
        <div className="products-track-wrap">
          <div
            className="products-track"
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {products.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="prod-full-card" style={{ textDecoration: 'none' }}>
                <div className="prod-card-top" style={{ background: 'transparent' }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={200}
                    height={240}
                    style={{ height: 240, width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div className="prod-card-info">
                  <div className="prod-card-tag" style={{ color: p.color }}>{p.series}</div>
                  <div className="prod-card-name">{p.name}</div>
                  <div
                    className="prod-card-usecase"
                    style={{
                      background: p.usecaseBg,
                      color: p.usecaseColor,
                      border: `1px solid ${p.usecaseBorder}`,
                    }}
                  >
                    {p.usecase}
                  </div>
                  <div className="prod-card-desc">{p.desc.slice(0, 120)}...</div>
                  <button className="prod-order-btn" style={{ background: p.color }}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13}>
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Order Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button className="slider-btn" onClick={() => slide(-1)} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="slider-dots">
            {products.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to product ${i + 1}`}
              />
            ))}
          </div>

          <button className="slider-btn" onClick={() => slide(1)} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
