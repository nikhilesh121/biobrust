import Link from 'next/link'
import Footer from '@/components/Footer'

export default function DisclaimerPage() {
  return (
    <main style={{ paddingTop: 72 }}>
      <div className="page-hero">
        <span className="section-label">Legal</span>
        <h1 className="section-title" style={{ marginTop: '.5rem' }}>
          <span>Disclaimer</span>
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: '.5rem' }}>Last updated: January 2026</p>
      </div>
      <div className="legal-content">
        <h2>General Disclaimer</h2>
        <p>The information provided on this website is for general informational and commercial enquiry purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the site.</p>

        <h2>Product Disclaimer</h2>
        <p>BIOBRUST energy drinks are intended for consumption by healthy adults only. These products are not intended to diagnose, treat, cure, or prevent any disease. Not recommended for children, pregnant or nursing women, individuals sensitive to caffeine, or those with medical conditions. Consume responsibly.</p>

        <h2>Caffeine Warning</h2>
        <p>BIOBRUST products contain caffeine. Do not consume more than the recommended daily amount. Excessive caffeine intake may cause adverse health effects including increased heart rate, anxiety, and sleep disruption. Keep out of reach of children.</p>

        <h2>External Links Disclaimer</h2>
        <p>The website may contain links to external websites that are not provided or maintained by or in any way affiliated with BIOBRUST. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

        <h2>Errors and Omissions Disclaimer</h2>
        <p>The information given by BIOBRUST is for general guidance on matters of interest only. Even if BIOBRUST takes every precaution to insure that the content of this website is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on this website.</p>

        <h2>Fair Use Disclaimer</h2>
        <p>BIOBRUST may use copyrighted material which has not always been specifically authorized by the copyright owner. We make such material available in our efforts to promote our products and services. We believe this constitutes a &apos;fair use&apos; of any such copyrighted material.</p>

        <h2>Contact</h2>
        <p>If you have any questions about this Disclaimer, please contact us at <a href="mailto:info@biobrust.com">info@biobrust.com</a>.</p>

        <div style={{ marginTop: '3rem' }}>
          <Link href="/" className="btn-lg btn-lg-secondary">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
