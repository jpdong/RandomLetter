import PasswordGeneratorPage from '../../src/pages/PasswordGeneratorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Password Generator - Create Strong Random Passwords',
  description: 'Generate strong, secure passwords with our advanced password generator. Customize length, character types, and security settings for maximum protection.',
  alternates: {
    canonical: 'https://randomletter.net/password-generator',
  },
  openGraph: {
    title: 'Password Generator - Create Strong Random Passwords',
    description: 'Generate strong, secure passwords with our advanced password generator. Customize length, character types, and security settings for maximum protection.',
    url: 'https://randomletter.net/password-generator',
    siteName: 'Random Letter Generator',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Secure Password Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secure Password Generator - Create Strong Random Passwords',
    description: 'Generate strong, secure passwords with our advanced password generator. Customize length, character types, and security settings.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PasswordGenerator() {
  return <PasswordGeneratorPage />
}