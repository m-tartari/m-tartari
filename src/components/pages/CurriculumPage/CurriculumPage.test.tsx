import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests'

import CurriculumPage from './index.js'

vi.stubGlobal('open', vi.fn())
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

describe('Curriculum component', () => {
  const open = vi.spyOn(window, 'open')

  test('renders without crashing', () => {
    render(<CurriculumPage />)

    expect(screen.getAllByText('Curriculum')).toHaveLength(3) // title, appbar button and appbar drawer button
  })

  test('displays the correct work experience', () => {
    render(<CurriculumPage />)

    expect(screen.getByText('Work Experience')).toBeInTheDocument()

    // check some of the positions
    expect(screen.getAllByText('Software Engineer')).toHaveLength(2) // large and smallscreen versions
    expect(screen.getAllByText('Embedded Engineer')).toHaveLength(2) // large and smallscreen versions
  })

  test('displays the correct education', async () => {
    render(<CurriculumPage />)

    // Education
    expect(screen.getByText('Education')).toBeInTheDocument()

    // check the subsections links
    let link = screen.getByText('EMARO+ Program - Master Studies')
    expect(link).toHaveAttribute('href', 'https://master-emaro.ec-nantes.fr/')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveAttribute('target', '_blank')

    link = screen.getByText('Almatong Project - Bachelor Studies')
    expect(link).toHaveAttribute('href', 'https://corsi.unibo.it/2cycle/AutomationEngineering/almatong-bachelor-programme')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveAttribute('target', '_blank')

    // check some of the entries
    expect(screen.getAllByText('M.Eng. in Robotics and Control')).toHaveLength(2) // large and smallscreen versions
    expect(screen.getAllByText('M.S. in Robotics and Control Engineering')).toHaveLength(2) // large and smallscreen versions
    expect(screen.getAllByText('B.S. in Control Theory and Control Engineering')).toHaveLength(2) // large and smallscreen versions
  })

  test('displays the correct skills', () => {
    render(<CurriculumPage />)

    expect(screen.getByText('Skills')).toBeInTheDocument()

    // check the subsection titles
    expect(screen.getByText('Languages')).toBeInTheDocument()
    expect(screen.getByText('Digital')).toBeInTheDocument()
    expect(screen.getByText('Softskills')).toBeInTheDocument()
  })

  test('displays the correct accomplishments', async () => {
    render(<CurriculumPage />)

    expect(screen.getByText('Accomplishments')).toBeInTheDocument()

    // check some of the awards
    expect(screen.getByText('Awards')).toBeInTheDocument()
    expect(screen.getByText('Premio Innovazione Robotica ed Automazione - Horizon')).toBeInTheDocument()

    // check some of the press releases
    expect(screen.getByText('Press Releases')).toBeInTheDocument()
    await userEvent.click(screen.getByText("Covid-19: L'impatto sui giovani talenti"))
    expect(open).toHaveBeenCalledWith('https://www.youtube.com/watch?v=Blat-e2Vyzk&feature=youtu.be', '_blank')

    // check some of the certifications
    expect(screen.getByText('Publications')).toBeInTheDocument()
    expect(screen.getByText('Control System Design for Human Assisting Robot')).toBeInTheDocument()
  })

  test('displays the correct extracurricular activites', () => {
    render(<CurriculumPage />)

    expect(screen.getByText('Extracurricular')).toBeInTheDocument()

    // check some of the activities
    expect(screen.getByText('Volunteering')).toBeInTheDocument()
    expect(screen.getByText('Blood Donor, Bone Marrow Donor at AVIS & ADMO')).toBeInTheDocument()

    // check some of the hobbies
    expect(screen.getByText('Interests')).toBeInTheDocument()
    expect(screen.getByText('Ju-jitsu')).toBeInTheDocument()
  })
})
