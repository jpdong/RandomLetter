import PrivacyPolicyPage from '../../src/pages/PrivacyPolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Random Letter Generator',
  description: 'Learn about how Random Letter Generator collects, uses, and protects your data. Our privacy policy explains our commitment to your privacy.',
  alternates: {
    canonical: 'https://randomletter.net/privacy-policy',
  },
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />
}
