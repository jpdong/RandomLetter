import GlitchTextGeneratorPage from '../../src/pages/GlitchTextGeneratorPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glitch Text Generator - Create Corrupted Text Effects | Random Letter',
  description: 'Generate glitch text effects with our free online tool. Create corrupted, distorted text using Unicode characters for social media, gaming, and creative projects.',
  alternates: {
    canonical: 'https://randomletter.net/glitch-text-generator',
  },
  openGraph: {
    title: 'Glitch Text Generator - Create Corrupted Text Effects',
    description: 'Generate glitch text effects with our free online tool. Create corrupted, distorted text using Unicode characters for social media, gaming, and creative projects.',
    url: 'https://randomletter.net/glitch-text-generator',
    siteName: 'Random Letter Generator',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Glitch Text Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glitch Text Generator - Create Corrupted Text Effects',
    description: 'Generate glitch text effects with our free online tool. Create corrupted, distorted text using Unicode characters.',
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

export default function GlitchTextGenerator() {
  return <GlitchTextGeneratorPage />
}