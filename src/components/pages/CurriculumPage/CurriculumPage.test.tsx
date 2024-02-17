import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithRouter as render } from 'components/utils/tests'

import CurriculumPage from '.'

vi.stubGlobal('open', vi.fn())

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
    await userEvent.click(screen.getByText('EMARO+ Program - Master Studies'))
    expect(open).toHaveBeenCalledWith('https://master-emaro.ec-nantes.fr/', '_blank')
    await userEvent.click(screen.getByText('Almatong Project - Bachelor Studies'))
    expect(open).toHaveBeenCalledWith('https://corsi.unibo.it/2cycle/AutomationEngineering/almatong-bachelor-programme', '_blank')

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
