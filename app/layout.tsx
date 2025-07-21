import type { Metadata } from 'next'
import './globals.css'
import './tailwind.css'
import GoogleAnalytics from '../src/components/analytics/GoogleAnalytics'
import CookieConsent from '../src/components/analytics/CookieConsent'

export const metadata: Metadata = {
  title: 'Multi Run - Parallel Dual App',
  description: 'Multi Run​​ is a powerful tool that allows you to run multiple accounts or applications simultaneously on a single device.',
  keywords: 'Multi Run,Parallel Space,Dual App,Multiple Accounts,Cloner,Virtual',
  icons: {
    icon: '/logo.webp',
  },
  other: {
    "saashub-verification":"8myrsab5uhvd"
  },
  alternates: {
      canonical: `https://multirun.space/`,
    },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <GoogleAnalytics />
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}