import { render, screen } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import App from './App'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() }, page: vi.fn() }),
}))

describe('App component', () => {
  test('renders MainPage without crashing', async () => {
    render(<App />)

    expect(screen.getByLabelText('loading-screen')).toBeInTheDocument()
    expect(await screen.findByText('Robotics Engineer')).toBeInTheDocument()
    expect(screen.queryByLabelText('loading-screen')).not.toBeInTheDocument()
  })
})
