import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

// Get measurement ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || ''
export const COOKIE_CONSENT_KEY = 'm-tartari-cookie-consent'
export const ANALYTICS_PLUGINS = ['google-analytics']

// Log warning if measurement ID is not set
if (!GA_MEASUREMENT_ID) {
  console.warn('Google Analytics Measurement ID is not set. Analytics will not track events.')
}

const analyticsInstance = Analytics({
  app: 'm-tartari-portfolio',
  plugins: [
    googleAnalytics({
      measurementIds: [GA_MEASUREMENT_ID],
      // Start disabled for GDPR compliance
      enabled: false,
    }),
  ],
})

// Initialize analytics
analyticsInstance.ready(() => {
  if (process.env.NODE_ENV !== 'test') console.info('Analytics system initialized')
})

// Track page views
export const trackPageView = (path: string) => {
  analyticsInstance.page({
    path,
    title: document.title,
  })
}

// Track custom events
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (event: string, payload: Record<string, any> = {}) => {
  analyticsInstance.track(event, payload)
}

export default analyticsInstance
