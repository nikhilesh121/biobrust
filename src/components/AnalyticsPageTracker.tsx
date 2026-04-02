'use client'

import { Suspense } from 'react'
import { FacebookPixelPageTracker } from './FacebookPixel'

export default function AnalyticsPageTracker() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelPageTracker />
    </Suspense>
  )
}
