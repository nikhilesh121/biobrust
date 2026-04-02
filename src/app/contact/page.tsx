'use client'

import { useState } from 'react'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'
import { products } from '@/lib/products'
import { siteConfig, analyticsConfig } from '@/lib/config'
import { fbContact, fbLead } from '@/components/FacebookPixel'
import { gtagEvent, gtagConversion } from '@/components/GoogleAnalytics'

interface OrderItem {
  product: string
  qty: string
  unit: string
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', business: '', email: '', phone: '', enquiry: '', message: ''
  })
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { product: '', qty: '', unit: 'cases' }
  ])
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show: false, msg: '', error: false })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleItemChange = (index: number, field: keyof OrderItem, value: string) => {
    setOrderItems(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item))
  }

  const addItem = () => setOrderItems(prev => [...prev, { product: '', qty: '', unit: 'cases' }])

  const removeItem = (index: number) => {
    if (orderItems.length > 1) setOrderItems(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.message) {
      setToast({ show: true, msg: 'Please fill all required fields.', error: true })
      return
    }
    setLoading(true)
    try {
      const filledItems = orderItems.filter(i => i.product && i.qty)
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.name,
          business: form.business,
          email: form.email,
          phone: form.phone,
          enquiry: form.enquiry,
          message: form.message,
          orderItems: filledItems,
        }),
      })
      if (res.ok) {
        setToast({ show: true, msg: 'Message sent! We\'ll reply within 24 hours.', error: false })
        setForm({ name: '', business: '', email: '', phone: '', enquiry: '', message: '' })
        setOrderItems([{ product: '', qty: '', unit: 'cases' }])
        fbContact()
        fbLead({ content_name: form.enquiry || 'Dealer Enquiry' })
        gtagEvent('generate_lead', { event_category: 'Contact', event_label: form.enquiry || 'Dealer Enquiry' })
        gtagConversion(analyticsConfig.gads.labelContact)
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
      <div className="page-hero">
        <span className="section-label">Get In Touch</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          Dealer <span>Enquiries</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 580, margin: '.5rem auto 0', lineHeight: 1.7 }}>
          Interested in stocking BIOBRUST? Want to become a distributor? Or just have a question? Reach out below.
        </p>
      </div>

      <div className="contact-layout">
        {/* INFO COLUMN */}
        <div className="contact-info-col">
          <h2>Let&apos;s Build Something Big Together</h2>
          <p>
            We&apos;re actively seeking passionate dealers, distributors, and brand partners across India. Whether you run a retail shop, gym, café, gaming zone, or wholesale business — there&apos;s a BIOBRUST opportunity for you.
          </p>
          <div className="contact-items">
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="var(--neon)" width={18} height={18} style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6" fill="none" stroke="var(--neon)" strokeWidth="2"/>
              </svg>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">{siteConfig.contact.email}</div>
              </div>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} width={18} height={18} style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div>
                <div className="contact-item-label">Phone / WhatsApp</div>
                <div className="contact-item-val">{siteConfig.contact.phone}</div>
              </div>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} width={18} height={18} style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div>
                <div className="contact-item-label">Headquarters</div>
                <div className="contact-item-val">{siteConfig.contact.address}</div>
              </div>
            </div>
            <div className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--neon)" strokeWidth={2} width={18} height={18} style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <div>
                <div className="contact-item-label">Response Time</div>
                <div className="contact-item-val">Within 24 Business Hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className="contact-form-col">
          <div className="contact-form-box">
            <h3>Send Us a Message</h3>
            <p>Dealer inquiry, bulk order, partnership proposal, or general question — we read everything.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Business Name</label>
                  <input className="form-input" type="text" name="business" placeholder="Shop or company" value={form.business} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" type="tel" name="phone" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} required />
                </div>
                <div className="form-group full">
                  <label className="form-label">Subject / Enquiry Type</label>
                  <select className="form-select" name="enquiry" value={form.enquiry} onChange={handleChange}>
                    <option value="">Select enquiry type</option>
                    <option value="Dealer / Distributor Enquiry">Dealer / Distributor Enquiry</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Partnership Proposal">Partnership Proposal</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>

                {/* PRODUCT ORDER SECTION */}
                <div className="form-group full">
                  <div className="order-items-section">
                    <h4 style={{ fontFamily: 'Cinzel Decorative, serif', fontSize: '1rem', color: 'var(--white)', marginBottom: '.5rem' }}>
                      Products &amp; Quantities
                    </h4>
                    <p className="sub" style={{ color: 'var(--muted)', fontSize: '.82rem', marginBottom: '1rem' }}>
                      Specify which products you&apos;re interested in and how many cases.
                    </p>
                    {orderItems.map((item, index) => (
                      <div key={index} className="order-item-row">
                        <div className="form-group">
                          <label className="form-label">Product</label>
                          <select
                            className="form-select"
                            value={item.product}
                            onChange={(e) => handleItemChange(index, 'product', e.target.value)}
                          >
                            <option value="">Select product</option>
                            {products.map((p) => (
                              <option key={p.id} value={p.name}>{p.name}</option>
                            ))}
                            <option value="Mixed / Assorted">Mixed / Assorted</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Qty (Cases)</label>
                          <input
                            className="form-input"
                            type="number"
                            min="1"
                            placeholder="10"
                            value={item.qty}
                            onChange={(e) => handleItemChange(index, 'qty', e.target.value)}
                          />
                        </div>
                        <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
                          <button
                            type="button"
                            className="remove-item-btn"
                            onClick={() => removeItem(index)}
                            title="Remove"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                    <button type="button" className="add-item-btn" onClick={addItem}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={12} height={12}>
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                      Add Another Product
                    </button>
                  </div>
                </div>

                <div className="form-group full">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-textarea"
                    name="message"
                    placeholder="Tell us about your business, location, and what you're looking for..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button className="form-submit" type="submit" disabled={loading}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                  <path d="M22 2L11 13"/>
                  <path d="M22 2L15 22 11 13 2 9l20-7z"/>
                </svg>
                {loading ? 'Sending...' : 'Send Message'}
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
