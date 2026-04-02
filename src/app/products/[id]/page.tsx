'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'
import { getProductById, products } from '@/lib/products'
import { analyticsConfig } from '@/lib/config'
import { fbViewContent, fbLead } from '@/components/FacebookPixel'
import { gtagEvent, gtagConversion } from '@/components/GoogleAnalytics'

export default function ProductDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const product = getProductById(id)

  useEffect(() => {
    if (product) {
      fbViewContent({ content_name: product.name, content_ids: [product.id], content_type: 'product' })
      gtagEvent('view_item', { item_id: product.id, item_name: product.name })
    }
  }, [product])

  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', qty: '', city: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '', error: false })

  if (!product) {
    return (
      <main style={{ paddingTop: 72, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Cinzel Decorative, serif', color: 'var(--white)', marginBottom: '1rem' }}>Product Not Found</h2>
          <Link href="/products" className="btn-lg btn-lg-primary">Back to Products</Link>
        </div>
      </main>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.qty) {
      setToast({ show: true, msg: 'Please fill all required fields.', error: true })
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'order',
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          product: product.name,
          qty: form.qty,
          city: form.city,
          message: form.message,
        }),
      })
      if (res.ok) {
        setToast({ show: true, msg: 'Order submitted! We\'ll contact you within 24 hours.', error: false })
        setForm({ name: '', business: '', email: '', phone: '', qty: '', city: '', message: '' })
        fbLead({ content_name: product?.name })
        gtagEvent('generate_lead', { event_category: 'Order', event_label: product?.name })
        gtagConversion(analyticsConfig.gads.labelOrder)
      } else {
        setToast({ show: true, msg: 'Failed to send. Please try again.', error: true })
      }
    } catch {
      setToast({ show: true, msg: 'Network error. Please try again.', error: true })
    }
    setLoading(false)
  }

  return (
    <main style={{ paddingTop: 72 }}>
      <div className="product-detail-hero page-hero" style={{ textAlign: 'left', borderBottom: 'none' }}>
        <Link href="/products" className="back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Products
        </Link>
        <span className="section-label">{product.tag}</span>
        <h1 className="section-title" style={{ marginTop: '.3rem' }}>
          {product.name.replace(/(\w+)$/, '')} <span>{product.name.split(' ').pop()}</span>
        </h1>
      </div>

      <div className="product-detail-layout">
        <div className="product-detail-visual">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={380}
            style={{ height: 380, width: 'auto', objectFit: 'contain' }}
            priority
          />
        </div>

        <div className="product-detail-info">
          <span className="prod-card-tag" style={{ color: product.color, display: 'block', marginBottom: '.8rem' }}>
            {product.series}
          </span>
          <div
            className="prod-card-usecase"
            style={{
              background: product.usecaseBg,
              color: product.usecaseColor,
              border: `1px solid ${product.usecaseBorder}`,
              marginBottom: '1.2rem',
            }}
          >
            {product.usecase}
          </div>
          <p className="body-text" style={{ marginBottom: '2rem' }}>{product.desc}</p>

          <div className="product-specs">
            {product.specs.map((s) => (
              <div key={s.label} className="spec-item">
                <div className="spec-label">{s.label}</div>
                <div className="spec-value">{s.val}</div>
              </div>
            ))}
          </div>

          {/* ORDER FORM */}
          <div className="order-form-section">
            <h3>Place a Dealer Order</h3>
            <p>Fill the form below to request this product. Our team will contact you within 24 hours to confirm pricing and delivery.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Business Name</label>
                  <input className="form-input" type="text" name="business" placeholder="Shop / company name" value={form.business} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Product</label>
                  <input className="form-input" type="text" value={product.name} readOnly style={{ opacity: .7 }} />
                </div>
                <div className="form-group">
                  <label className="form-label">Quantity (Cases) *</label>
                  <input className="form-input" type="number" name="qty" placeholder="Min. 10 cases" min="10" value={form.qty} onChange={handleChange} required />
                </div>
                <div className="form-group full">
                  <label className="form-label">City / Location *</label>
                  <input className="form-input" type="text" name="city" placeholder="Your city and state" value={form.city} onChange={handleChange} />
                </div>
                <div className="form-group full">
                  <label className="form-label">Message / Special Requirements</label>
                  <textarea className="form-textarea" name="message" placeholder="Any additional details, preferred delivery timeline, or questions..." value={form.message} onChange={handleChange} />
                </div>
              </div>
              <button className="form-submit" type="submit" disabled={loading}>
                <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {loading ? 'Sending...' : 'Submit Order Request'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Toast message={toast.msg} show={toast.show} isError={toast.error} onHide={() => setToast(t => ({ ...t, show: false }))} />
      <Footer />
    </main>
  )
}
