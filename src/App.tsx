import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage, ContactPage, ErrorPage, CurriculumPage } from 'components/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/curriculum',
    element: <CurriculumPage />,
  },
  {
    path: '/contacts',
    element: <ContactPage />,
  },
])

const App = () => <RouterProvider router={router} />

export default App
