import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions – BIOBRUST Energy Drinks',
  description: 'Read the BIOBRUST terms and conditions governing use of our website, dealer enquiries, and purchase of our energy drink products across India.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms & Conditions – BIOBRUST Energy Drinks',
    description: 'Terms and conditions governing use of the BIOBRUST website and dealer network.',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-hero">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          Terms &amp; <span>Conditions</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: '.5rem' }}>Last updated: January 2026</p>
      </div>
      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the BIOBRUST website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

        <h2>2. Use of Website</h2>
        <p>This website is intended for informational and business enquiry purposes only. You agree not to use this site for any unlawful purpose or in any way that could damage, disable, or impair the website.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of BIOBRUST and is protected by applicable intellectual property laws. Unauthorised use is strictly prohibited.</p>

        <h2>4. Product Information</h2>
        <p>We strive to provide accurate product information on our website. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. Pricing and availability are subject to change without notice.</p>

        <h2>5. Dealer Agreements</h2>
        <p>Submission of a dealer enquiry form does not constitute a binding dealership agreement. All dealership arrangements are subject to separate written agreements between BIOBRUST and the prospective dealer.</p>

        <h2>6. Limitation of Liability</h2>
        <p>BIOBRUST shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the website or any content thereon.</p>

        <h2>7. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>

        <h2>8. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the website after any changes constitutes your acceptance of the new terms.</p>

        <h2>9. Contact</h2>
        <p>For any questions regarding these Terms &amp; Conditions, please contact us at <a href="mailto:info@biobrust.com">info@biobrust.com</a>.</p>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/" className="btn-lg btn-lg-secondary">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
