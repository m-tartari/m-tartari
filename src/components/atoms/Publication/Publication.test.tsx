import { render, screen } from '@testing-library/react'
import { Box } from '@mui/material'

import Publication from './index.js'

vi.stubGlobal('open', vi.fn())

describe('Publication component', () => {
  const defaultProps = {
    year: '2022',
    authors: 'Test Author',
    title: 'Test Title',
    location: 'Test Location',
    href: 'https://test.com',
  }
  test('renders without crashing and displays the correct year, authors, title, and location', () => {
    render(<Publication {...defaultProps} href={undefined} />)
    expect(screen.getByText(defaultProps.year)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.authors, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(defaultProps.location, { exact: false })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('opens the correct link when the link button is clicked', async () => {
    render(<Publication {...defaultProps} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', defaultProps.href)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('renders correctly with a custom base component', () => {
    render(<Publication {...defaultProps} Component={Box} />)
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
  })
})
