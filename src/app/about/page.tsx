import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { productImages } from '@/lib/config'

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-hero">
        <span className="section-label">Who We Are</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          The BIOBRUST <span>Mission</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 580, margin: '.5rem auto 0', lineHeight: 1.7 }}>
          We don&apos;t just make energy drinks. We engineer weapons of performance for India&apos;s next generation of warriors.
        </p>
      </div>

      <div className="about-sections">
        {/* ROW 1 */}
        <div className="about-row">
          <div>
            <div className="big-text">
              Born to <span style={{ color: 'var(--neon)' }}>Fuel</span> Performance
            </div>
            <p className="body-text">
              BIOBRUST was founded with one conviction: that India&apos;s high-performance community deserves a world-class energy drink brand — one that understands the grind, the gaming session, the night shift, and the championship bout.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              Every formula we craft starts with science and ends with taste. Our in-house R&amp;D team obsesses over ingredient quality, bioavailability, and flavour engineering so each can delivers exactly what it promises.
            </p>
          </div>
          <div>
            <div className="highlight-block">
              <div className="timeline">
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">Founded</div>
                    <div className="tl-text">BIOBRUST launches with 3 flagship flavors and a vision to dominate the performance energy market.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">Product Expansion</div>
                    <div className="tl-text">Line expands to 7+ formulas including the bestselling Cranberry Mojito, Ginger Ale, and Zero Sugar.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">National Distribution</div>
                    <div className="tl-text">Pan-India dealer network established with growing presence across 10+ states.</div>
                  </div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot" />
                  <div>
                    <div className="tl-title">2026 &amp; Beyond</div>
                    <div className="tl-text">New formulas, premium packaging, and international market entry on the horizon.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VALUES */}
        <div style={{ textAlign: 'center' }}>
          <span className="section-label" style={{ textAlign: 'center', display: 'block' }}>Our Values</span>
          <h2 className="section-title">What Drives <span>BIOBRUST</span></h2>
          <div className="values-grid" style={{ marginTop: '2.5rem' }}>
            <div className="value-card">
              <svg className="value-icon" viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <div className="value-name">Integrity</div>
              <div className="value-text">We put real ingredients in every can. No shortcuts, no compromises. What&apos;s on the label is what you get.</div>
            </div>
            <div className="value-card">
              <svg className="value-icon" viewBox="0 0 24 24" fill="var(--neon)">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              <div className="value-name">Performance</div>
              <div className="value-text">Every formula is engineered to deliver measurable results. We design for warriors who demand more from every moment.</div>
            </div>
            <div className="value-card">
              <svg className="value-icon" viewBox="0 0 24 24" fill="var(--neon)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21l1.18-6.86L2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <div className="value-name">Excellence</div>
              <div className="value-text">From formula development to packaging design — we pursue excellence in every detail, every single time.</div>
            </div>
          </div>
        </div>

        {/* ROW 2 — products showcase */}
        <div className="about-row">
          <div>
            <div className="big-text">
              Seven Flavors. <span style={{ color: 'var(--neon)' }}>One Mission.</span>
            </div>
            <p className="body-text">
              From the raw power of Original to the refreshing bite of Ginger Ale and the nightlife energy of Cranberry Mojito — every BIOBRUST flavor is crafted for a specific warrior and a specific moment.
            </p>
            <p className="body-text" style={{ marginTop: '1rem' }}>
              Our Zero Sugar variant proves that healthy choices don&apos;t mean compromising on performance. With 80mg of precision-dosed caffeine and B-vitamin complexes, every can is a precision instrument.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/products" className="btn-lg btn-lg-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Explore All Products
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {[productImages.original, productImages.classic, productImages.citrus, productImages.cranberry].map((src, i) => (
              <div key={i} style={{
                background: 'var(--card-bg)', border: '1px solid var(--border)',
                borderRadius: 10, padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Image src={src} alt={`BIOBRUST product ${i + 1}`} width={90} height={130} style={{ height: 130, width: 'auto', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '.5rem' }}>Join the Movement</span>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Become a <span>BIOBRUST Dealer</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Partner with India&apos;s boldest energy drink brand. Get exclusive pricing, dedicated support, and be part of something that&apos;s just getting started.
          </p>
          <Link href="/contact" className="btn-lg btn-lg-primary">
            <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Get Dealership
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
