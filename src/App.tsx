import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from 'components/pages/ErrorPage/index.js'
import RootLayout from 'components/templates/RouteTracker/index.js'
import Loading from 'components/molecules/LoadingScreen/index.js'

const MainPage = React.lazy(() => import('components/pages/MainPage/index.js'))
const ProjectsPage = React.lazy(() => import('components/pages/ProjectsPage/index.js'))
const CurriculumPage = React.lazy(() => import('components/pages/CurriculumPage/index.js'))
const ContactPage = React.lazy(() => import('components/pages/ContactPage/index.js'))
const PrivacyPage = React.lazy(() => import('components/pages/PrivacyPage/index.js'))
const BusinessCardPage = React.lazy(() => import('components/pages/BusinessCardPage/index.js'))

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
      {
        path: 'privacy',
        element: (
          <React.Suspense fallback={<Loading />}>
            <PrivacyPage />
          </React.Suspense>
        ),
      },
      {
        path: 'card',
        element: (
          <React.Suspense fallback={<Loading />}>
            <BusinessCardPage />
          </React.Suspense>
        ),
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
