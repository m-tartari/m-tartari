import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage } from 'components/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
])

const App = () => <RouterProvider router={router} />

export default App
