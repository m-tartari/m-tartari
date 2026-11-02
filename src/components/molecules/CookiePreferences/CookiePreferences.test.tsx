import { screen, render } from '@testing-library/react'

import CookiePreferences from './index.js'

describe('CookiePreferences', () => {
  it('renders the cookie consent without errors', () => {
    render(<CookiePreferences />)

    expect(screen.getByText('Cookie Policy')).toBeInTheDocument()
  })
})
