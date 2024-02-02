import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainPage, ContactPage, ErrorPage, CurriculumPage, ProjectsPage } from 'components/pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
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
