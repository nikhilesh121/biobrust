import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy – BIOBRUST Energy Drinks',
  description: 'Read the BIOBRUST privacy policy. Learn how we collect, use, and protect your personal information when you visit our website or place a dealer enquiry.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy – BIOBRUST Energy Drinks',
    description: 'Learn how BIOBRUST collects, uses, and protects your personal information.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-hero">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          Privacy <span>Policy</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: '.5rem' }}>Last updated: January 2026</p>
      </div>
      <div className="legal-content">
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you fill out our contact or dealer enquiry forms. This includes your name, business name, email address, phone number, and any messages you send us.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to respond to your enquiries, process dealer applications, send you information about our products and services, and improve our website and offerings.</p>

        <h2>3. Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>

        <h2>5. Cookies</h2>
        <p>Our website may use cookies to enhance your experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.</p>

        <h2>6. Third-Party Links</h2>
        <p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites.</p>

        <h2>7. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information that we hold. To exercise these rights, please contact us at <a href="mailto:cc@biobrust.com">cc@biobrust.com</a>.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We reserve the right to update this privacy policy at any time. Changes will be posted on this page with an updated revision date.</p>

        <h2>9. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:cc@biobrust.com">cc@biobrust.com</a>.</p>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/" className="btn-lg btn-lg-secondary">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
