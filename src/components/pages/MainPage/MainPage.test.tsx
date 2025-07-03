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

    // Make sure the project spotlights are present for both desktop and mobile
    expect(screen.getAllByText('LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots')).toHaveLength(2)
    expect(screen.getAllByText("Revamping HHCM's Modular: Swift Generation of Modular Robot Models")).toHaveLength(2)
    expect(screen.getAllByText('Automated Actuators and Robotic Modules Calibration')).toHaveLength(2)
    expect(screen.getAllByText('Voice Controlled Mobile Robot for Indoor Applications')).toHaveLength(2)
  })
})
