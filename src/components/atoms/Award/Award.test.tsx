import { render, screen } from '@testing-library/react'
import { Box } from '@mui/material'

import Award from './Award'

describe('Award component', () => {
  const mockProps = {
    year: '2022',
    title: 'Test Award',
    organization: 'Test Organization',
    location: 'Test Location',
    titleProps: { color: 'text.primary' },
    sx: { color: 'text.secondary' },
  }

  it('renders without crashing', () => {
    render(<Award {...mockProps} />)
  })

  it('displays the correct year', () => {
    render(<Award {...mockProps} />)
    expect(screen.getByText(mockProps.year)).toBeInTheDocument()
  })

  it('displays the correct title', () => {
    render(<Award {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })

  it('displays the correct organization', () => {
    render(<Award {...mockProps} />)
    expect(screen.getByText(mockProps.organization)).toBeInTheDocument()
  })

  it('displays the correct location', () => {
    render(<Award {...mockProps} />)
    expect(screen.getByText(mockProps.location)).toBeInTheDocument()
  })

  it('renders with the correct component', () => {
    const { container } = render(<Award Component={Box} {...mockProps} />)
    expect(container.firstChild!.nodeName).toBe('DIV')
  })
})
