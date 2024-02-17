import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'

import { ErrorPage } from 'components/pages'

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
    element: (
      <React.Suspense fallback={<Loading />}>
        <MainPage />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects',
    element: (
      <React.Suspense fallback={<Loading />}>
        <ProjectsPage />
      </React.Suspense>
    ),
  },
  {
    path: '/curriculum',
    element: (
      <React.Suspense fallback={<Loading />}>
        <CurriculumPage />
      </React.Suspense>
    ),
  },
  {
    path: '/contacts',
    element: (
      <React.Suspense fallback={<Loading />}>
        <ContactPage />
      </React.Suspense>
    ),
  },
])

const App = () => <RouterProvider router={router} />

export default App
