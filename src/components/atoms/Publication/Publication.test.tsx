import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Box } from '@mui/material'

import Publication from '.'

vi.stubGlobal('open', vi.fn())
const open = vi.spyOn(window, 'open')

describe('Publication component', () => {
  const defaultProps = {
    year: '2022',
    authors: 'Test Author',
    title: 'Test Title',
    location: 'Test Location',
    link: 'https://test.com',
  }
  test('renders without crashing and displays the correct year, authors, title, and location', () => {
    render(<Publication {...defaultProps} link={undefined} />)
    expect(screen.getByText(defaultProps.year)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
    expect(screen.getByText(defaultProps.authors, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(defaultProps.location, { exact: false })).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  test('opens the correct link when the link button is clicked', async () => {
    render(<Publication {...defaultProps} />)
    await userEvent.click(screen.getByRole('button'))
    expect(open).toHaveBeenCalledWith(defaultProps.link, '_blank')
  })

  test('renders correctly with a custom base component', () => {
    render(<Publication {...defaultProps} Component={Box} />)
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
  })
})
