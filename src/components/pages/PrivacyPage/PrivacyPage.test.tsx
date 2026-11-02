import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import PrivacyPage from './index.js'

describe('PrivacyPage', () => {
  it('renders the Privacy Policy page', () => {
    render(<PrivacyPage />)
    expect(screen.getAllByText('Privacy Policy')).toHaveLength(2) // title and footer
    expect(screen.getByText('Cookie Policy')).toBeInTheDocument()
  })
})
