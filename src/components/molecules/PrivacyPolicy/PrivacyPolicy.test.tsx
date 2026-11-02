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
    expect(screen.getByText('Tipi di dati trattati (Dati di navigazione)')).toBeInTheDocument()
    expect(screen.getByText('Diritti di accesso e reclamo')).toBeInTheDocument()
  })
})
