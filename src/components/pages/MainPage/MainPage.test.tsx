import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import MainPage from '.'

// Tests
describe('Main page', () => {
  it('Should render the page correctly on desktop', async () => {
    await render(<MainPage />)

    // Make sure the page title is correct
    expect(screen.getByText('Robotics Engineer')).toBeInTheDocument()

    // Make sure the project spotlights are present for both desktop and mobile
    expect(screen.getAllByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toHaveLength(2)
    expect(screen.getAllByText("Revamping HHCM's Modular: Swift Generation of Modular Robot Models")).toHaveLength(2)
    expect(screen.getAllByText('Automated Actuators and Robotic Modules Calibration')).toHaveLength(2)
    expect(screen.getAllByText('Voice Controlled Mobile Robot for Indoor Applications')).toHaveLength(2)
  })
})
