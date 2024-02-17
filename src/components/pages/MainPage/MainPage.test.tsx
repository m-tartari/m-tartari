import { screen } from '@testing-library/react'

import { renderWithRouter as render } from 'components/utils/tests'

import MainPage from '.'

// Tests
describe('Main page', async () => {
  it('Should render the page correctly', async () => {
    // Setup
    await render(<MainPage />)

    // Make sure the page title is correct
    expect(screen.getByText('Robotics Engineer')).toBeInTheDocument()

    // Make sure the project spotlights are present
    expect(screen.getByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toBeInTheDocument()
    expect(screen.getByText("Revamping HHCM's Modular: Swift Generation of Modular Robot Models")).toBeInTheDocument()
    expect(screen.getByText('Automated Actuators and Robotic Modules Calibration')).toBeInTheDocument()
    expect(screen.getByText('Voice Controlled Mobile Robot for Indoor Applications')).toBeInTheDocument()
  })
})
