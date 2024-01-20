import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorPage, MainPage } from 'components/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
])

const App = () => <RouterProvider router={router} />

export default App
