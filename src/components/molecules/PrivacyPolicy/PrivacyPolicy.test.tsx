import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import PrivacyPolicy from './index.js'

describe('Privacy Policy', () => {
  it('renders the Privacy Policy page', async () => {
    render(
      <BrowserRouter>
        <PrivacyPolicy />
      </BrowserRouter>
    )
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Google Analytics')).toBeInTheDocument()
    expect(screen.getByText('Your Rights')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
