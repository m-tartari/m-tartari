import { screen, fireEvent } from '@testing-library/react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useAnalytics } from 'use-analytics'

import { renderWithRouter as render } from 'components/utils/tests/index.js'

import CookiePreferences from './index.js'

// Mock the analytics module
const analytics = { plugins: { enable: vi.fn(), disable: vi.fn() } }
vi.mock('use-analytics', () => ({
  useAnalytics: () => analytics,
}))

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value
    }),
    clear: vi.fn(() => {
      store = {}
    }),
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('CookiePreferences', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.clear()
  })

  it('accepts all cookies when clicking Accept All', () => {
    render(<CookiePreferences />)

    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Accept All'))
    fireEvent.click(screen.getByText('Save Preferences'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ necessary: true, analytics: true }))
    expect(analytics.plugins.disable).not.toHaveBeenCalled()
    expect(analytics.plugins.enable).toHaveBeenCalled()
  })

  it('rejects analytics cookies when clicking Reject All', () => {
    render(<CookiePreferences />)

    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Reject All'))
    fireEvent.click(screen.getByText('Save Preferences'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ necessary: true, analytics: false }))
    expect(analytics.plugins.enable).not.toHaveBeenCalled()
    expect(analytics.plugins.disable).toHaveBeenCalled()
  })

  it('toggles analytics cookies when clicking the Analytics button', () => {
    render(<CookiePreferences />)

    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('analytics-cookies-toggle'))
    fireEvent.click(screen.getByText('Save Preferences'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ necessary: true, analytics: true }))
    expect(analytics.plugins.disable).not.toHaveBeenCalled()
    expect(analytics.plugins.enable).toHaveBeenCalled()
  })

  it('renders the cookie consent in the right state when consent in local storage', () => {
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify({ necessary: true, analytics: true }))
    render(<CookiePreferences />)

    expect(screen.getByText('Cookie Preferences')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('analytics-cookies-toggle'))
    fireEvent.click(screen.getByText('Save Preferences'))

    expect(localStorageMock.setItem).toHaveBeenCalledWith('m-tartari-cookie-consent', JSON.stringify({ necessary: true, analytics: false }))
    expect(analytics.plugins.enable).not.toHaveBeenCalled()
    expect(analytics.plugins.disable).toHaveBeenCalled()
  })
})
