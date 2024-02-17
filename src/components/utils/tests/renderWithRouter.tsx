import { render as vanillaRender, RenderResult } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

function render(el: React.ReactElement, routes: string[] = ['/']): RenderResult {
  const router = createMemoryRouter([{ path: '/', element: el }], { initialEntries: routes })

  return vanillaRender(<RouterProvider router={router} />)
}

export default render
