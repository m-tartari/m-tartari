import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage, ContactPage, ErrorPage } from 'components/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contacts',
    element: <ContactPage />,
  },
])

const App = () => <RouterProvider router={router} />

export default App
