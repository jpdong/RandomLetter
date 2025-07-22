import YesNoWheelPage from '../../src/pages/YesNoWheelPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yes or No Wheel - Random Decision Maker | Free Online Tool',
  description: 'Can\'t decide? Use our free Yes or No wheel to make random decisions. Perfect for breaking decision paralysis, games, or when you need a quick answer.',
  keywords: 'yes no wheel, decision maker, random decision, yes or no generator, decision wheel, choice maker',
}

export default function YesNoWheel() {
  return <YesNoWheelPage />
}