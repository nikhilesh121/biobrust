'use client'

import { useEffect } from 'react'

interface ToastProps {
  message: string
  show: boolean
  isError?: boolean
  onHide: () => void
}

export default function Toast({ message, show, isError, onHide }: ToastProps) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(onHide, 4000)
      return () => clearTimeout(t)
    }
  }, [show, onHide])

  return (
    <div className={`toast${show ? ' show' : ''}${isError ? ' toast-error' : ''}`}>
      {!isError && (
        <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )}
      {message}
    </div>
  )
}
