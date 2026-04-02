'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { productImages, siteConfig } from '@/lib/config'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="navbar">
        <Link href="/" className="nav-logo">
          <Image
            src={productImages.logo}
            alt={`${siteConfig.name} Logo`}
            width={46}
            height={46}
            className="nav-logo-img"
          />
          <span className="nav-brand">{siteConfig.name}</span>
        </Link>

        <ul className="nav-menu">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={pathname === l.href ? 'active-link' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link href="/contact" className="btn-outline">
            Become a Dealer
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
            {l.label}
          </Link>
        ))}
        <div className="m-btns">
          <Link href="/contact" className="btn-solid" onClick={() => setMobileOpen(false)}>
            Become a Dealer
          </Link>
        </div>
      </div>
    </>
  )
}
