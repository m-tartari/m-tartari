import React from 'react'
import { screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import PrivacyPage from './index.js'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

describe('PrivacyPage', () => {
  it('renders the Privacy Policy page', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByText('Privacy Policy')).toHaveLength(3) // title, body (cookie preferences section) and footer
    expect(screen.getByText('Google Analytics')).toBeInTheDocument()
    expect(screen.getByText('Your Rights')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getAllByText('Cookie Preferences')).toHaveLength(2) // body and footer
  })
})
