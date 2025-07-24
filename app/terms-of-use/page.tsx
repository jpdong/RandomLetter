import TermsOfUsePage from '../../src/pages/TermsOfUsePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use - Random Letter Generator',
  description: 'Read the terms and conditions for using Random Letter Generator. Understand your rights and responsibilities when using our service.',
  alternates: {
    canonical: 'https://randomletter.net/terms-of-use',
  },
}

export default function TermsOfUse() {
  return <TermsOfUsePage />
}
