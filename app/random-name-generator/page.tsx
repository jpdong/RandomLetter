import RandomNamePage from '../../src/pages/RandomNamePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Random Name Generator - Create Character Names for Stories, Games & More',
  description: 'Generate random names for characters, stories, games, or any creative project. Customize by gender, nationality, and name length. Free online name generator tool.',
  keywords: 'random name generator, character name generator, fake name generator, story names, game character names, random names',
  alternates: {
    canonical: 'https://randomletter.net/random-name-generator',
  },
}

export default function RandomNameGenerator() {
  return <RandomNamePage />
}