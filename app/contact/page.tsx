import ContactUsPage from '../../src/pages/ContactUsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Random Letter Generator',
  description: 'Get in touch with the Random Letter Generator team. We\'d love to hear your feedback, suggestions, or answer any questions you may have.',
  alternates: {
    canonical: 'https://randomletter.net/contact',
  },
}

export default function Contact() {
  return <ContactUsPage />
}
