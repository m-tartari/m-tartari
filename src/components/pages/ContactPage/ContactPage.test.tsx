import { screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import ContactPage from './index.js'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

vi.stubGlobal('open', vi.fn())
describe('ContactPage', () => {
  test('renders without crashing and displays the correct contact methods', () => {
    render(<ContactPage />)

    expect(screen.getAllByText('Contacts')).toHaveLength(2) // Page title and the Appbar drawer link
    expect(screen.getByLabelText('Email link')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn link')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub link')).toBeInTheDocument()
  })

  test.each([
    {
      label: 'Email link',
      href: 'mailto:info@m-tartari.eu',
    },
    // {
    //   label: 'LinkedIn link',
    //   href: 'https://www.linkedin.com/in/m-tartari/',
    // },
    // {
    //   label: 'GitHub link',
    //   href: 'https://www.github.com/m-tartari/',
    // },
  ])('leads to the right place when the $label is clicked', ({ label, href }) => {
    render(<ContactPage />)
    const link = screen.getByLabelText(label)
    expect(link).toHaveAttribute('href', href)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
