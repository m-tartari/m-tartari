import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter as render } from 'components/utils/tests'

import ProjectsPage from '.'

vi.stubGlobal('open', vi.fn())
const open = vi.spyOn(window, 'open')
describe('ProjectsPage component', () => {
  test('renders without crashing and displays the correct project titles', () => {
    render(<ProjectsPage />)

    // check the section titles
    expect(screen.getByText('Robotics')).toBeInTheDocument()
    expect(screen.getByText('Engineering')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()

    // check some of the projects
    expect(screen.getByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toBeInTheDocument()
    expect(screen.getByText("Revamping HHCM's Modular: Swift Generation and Control of Modular Robot Models")).toBeInTheDocument()
    expect(screen.getByText('Voice Controlled Mobile Robot for Indoor Applications')).toBeInTheDocument()
  })

  test('opens the correct links when the link buttons are clicked', async () => {
    render(<ProjectsPage />)

    // test one of the many links
    await userEvent.click(screen.getByLabelText('Video-button'))
    expect(open).toHaveBeenLastCalledWith('https://www.linkedin.com/feed/update/urn:li:activity:7034480841569284096/', '_blank')
  })
})
