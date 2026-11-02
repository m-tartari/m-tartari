import React from 'react'
import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import Footer from './index.js'

describe('Footer', () => {
  it('renders the Footer', async () => {
    render(<Footer />)

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()
  })
})
