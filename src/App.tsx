import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from 'components/pages/ErrorPage/index.js'
import RootLayout from 'components/templates/RouteTracker/index.js'

const MainPage = React.lazy(() => import('components/pages/MainPage'))
const ProjectsPage = React.lazy(() => import('components/pages/ProjectsPage'))
const CurriculumPage = React.lazy(() => import('components/pages/CurriculumPage'))
const ContactPage = React.lazy(() => import('components/pages/ContactPage'))

const Loading = () => (
  <Backdrop open={true} aria-label="loading-screen">
    <CircularProgress />
  </Backdrop>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <MainPage />
          </React.Suspense>
        ),
      },
      {
        path: 'projects',
        element: (
          <React.Suspense fallback={<Loading />}>
            <ProjectsPage />
          </React.Suspense>
        ),
      },
      {
        path: 'curriculum',
        element: (
          <React.Suspense fallback={<Loading />}>
            <CurriculumPage />
          </React.Suspense>
        ),
      },
      {
        path: 'contacts',
        element: (
          <React.Suspense fallback={<Loading />}>
            <ContactPage />
          </React.Suspense>
        ),
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
