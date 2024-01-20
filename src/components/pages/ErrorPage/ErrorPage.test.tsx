import { describe, it, expect, afterEach } from 'vitest'
import { screen, cleanup, render } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import ErrorPage from './ErrorPage'

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
    const router = createMemoryRouter([{ path: '/', element: <div />, errorElement: <ErrorPage /> }], { initialEntries: ['/some/bad/route'] })

    render(<RouterProvider router={router} />)

    expect(screen.getByText('Oops!')).toBeInTheDocument()
    expect(screen.getByText('Sorry, an unexpected error has occurred.')).toBeInTheDocument()
    expect(screen.getByText('404 Not Found')).toBeInTheDocument()
  })
})
