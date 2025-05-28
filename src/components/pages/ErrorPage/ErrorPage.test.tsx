import { screen, cleanup, render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import ErrorPage from './index.js'

// Mock the analytics module
vi.mock('use-analytics', () => ({
  useAnalytics: () => ({ plugins: { enable: vi.fn(), disable: vi.fn() } }),
}))

// Tests
describe('Renders ErrorPage correctly', async () => {
  /**
   * Resets all renders after each test
   */
  afterEach(() => {
    cleanup()
  })

  /**
   * Passes - shows title correctly
   */
  it('Should render the error page correctly', () => {
    const badRoute = '/some/bad/route'
    const router = createMemoryRouter([{ path: '/', element: <div />, errorElement: <ErrorPage /> }], { initialEntries: [badRoute] })

    render(<RouterProvider router={router} />)

    expect(screen.getByText('Oops!')).toBeInTheDocument()
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument()
    expect(screen.getByText(`404 Error: No route matches URL "${badRoute}"`)).toBeInTheDocument()
  })
})
