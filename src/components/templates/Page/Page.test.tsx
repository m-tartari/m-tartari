import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests'

import Page from '.'

describe('Page component', () => {
  const defaultProps = {
    title: 'Test Page',
    children: <div>Test Content</div>,
    sx: { color: 'text.secondary' },
  }

  it('renders correctly and without crashing', () => {
    render(<Page {...defaultProps} />)

    // displays the correct title
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument()

    // displays the correct children
    expect(screen.getByText('Test Content')).toBeInTheDocument()

    // sets the document title correctly
    expect(document.title).toBe(`Michele Tartari - ${defaultProps.title}`)
  })

  it('does not render the title and divider when title is not provided', () => {
    render(<Page {...defaultProps} title={undefined} />)
    expect(screen.queryByText(defaultProps.title)).not.toBeInTheDocument()
    expect(screen.queryByRole('separator')).not.toBeInTheDocument()
  })
})
