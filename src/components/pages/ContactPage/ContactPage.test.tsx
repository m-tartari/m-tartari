import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter as render } from 'components/utils/tests'

import ContactPage from './ContactPage'

vi.stubGlobal('open', vi.fn())
describe('ContactPage', () => {
  const open = vi.spyOn(window, 'open')

  test('renders without crashing and displays the correct contact methods', () => {
    render(<ContactPage />)

    expect(screen.getAllByText('Contacts')).toHaveLength(2) // Page title and the Appbar drawer link
    expect(screen.getByLabelText('Email button')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn button')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub button')).toBeInTheDocument()
  })

  test('opens the correct link when the email button is clicked', async () => {
    render(<ContactPage />)

    await userEvent.click(screen.getByLabelText('Email button'))
    expect(open).toHaveBeenCalledWith('mailto:michele.tartari+web@live.com', '_blank')
  })

  test('opens the correct link when the LinkedIn button is clicked', async () => {
    render(<ContactPage />)

    await userEvent.click(screen.getByLabelText('LinkedIn button'))
    expect(open).toHaveBeenCalledWith('https://www.linkedin.com/in/m-tartari/', '_blank')
  })

  test('opens the correct link when the GitHub button is clicked', async () => {
    render(<ContactPage />)

    await userEvent.click(screen.getByLabelText('GitHub button'))
    expect(open).toHaveBeenCalledWith('https://www.github.com/m-tartari/', '_blank')
  })
})
