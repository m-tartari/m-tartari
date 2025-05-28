import { useEffect } from 'react'
import { useAnalytics } from 'use-analytics'
import { Outlet, useLocation } from 'react-router-dom'

/**
 * Route tracking component that wraps all routes and includes analytics page tracking
 */
const RouteTracker = () => {
  const location = useLocation()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.page()
  }, [analytics, location])

  return <Outlet />
}

export default RouteTracker
