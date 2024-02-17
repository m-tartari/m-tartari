import { render, screen } from '@testing-library/react'

import Extracurricular from '.'

describe('Extracurricular component', () => {
  const defaultProps = {
    title: 'Test Title',
    year: '2022',
  }

  test('renders without crashing and displays the correct title', () => {
    render(<Extracurricular {...defaultProps} year={undefined} />)
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()
    expect(screen.queryByText(defaultProps.year)).not.toBeInTheDocument()
  })

  test('displays the correct year when provided', () => {
    render(<Extracurricular {...defaultProps} />)
    expect(screen.getByText(defaultProps.year)).toBeInTheDocument()
  })
})
