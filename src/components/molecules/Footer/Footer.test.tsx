import React from 'react'
import { screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import Footer from './index.js'

// Mock the analytics module
const analytics = { plugins: { enable: vi.fn(), disable: vi.fn() } }
vi.mock('use-analytics', () => ({
  useAnalytics: () => analytics,
}))

describe('Footer', () => {
  it('renders the Footer', async () => {
    render(<Footer />)

    expect(screen.getAllByText('Privacy Policy')).toHaveLength(2) // link and dialog
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(2) // link and dialog
  })

  it('does not show the dialog if the `showCookieConsent` prop is false', () => {
    render(<Footer showCookieConsent={false} />)

    expect(screen.getAllByText('Privacy Policy')).toHaveLength(1) // link only
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(1) // link only
  })
})
