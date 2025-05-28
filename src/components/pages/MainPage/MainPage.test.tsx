import { screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'
import MainPage from '.'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

// Tests
describe('Main page', () => {
  it('Should render the page correctly on desktop', async () => {
    await render(<MainPage />)

    // Make sure the page title is correct
    expect(screen.getByText('Robotics Engineer')).toBeInTheDocument()

    // Make sure the project spotlights are present
    expect(screen.getByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toBeInTheDocument()
    expect(screen.getByText("Revamping HHCM's Modular: Swift Generation of Modular Robot Models")).toBeInTheDocument()
    expect(screen.getByText('Automated Actuators and Robotic Modules Calibration')).toBeInTheDocument()
    expect(screen.getByText('Voice Controlled Mobile Robot for Indoor Applications')).toBeInTheDocument()
  })
  it('Should render the page correctly on mobile', async () => {
    // Set the window size to mobile (Galaxy Note 20 Android 11)
    window.innerWidth = 412
    window.innerHeight = 915
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
