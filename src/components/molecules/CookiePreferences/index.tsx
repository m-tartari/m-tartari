import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Box, Button, Link, Stack, Switch, Typography, SnackbarCloseReason, Snackbar, Alert } from '@mui/material'
import { useAnalytics } from 'use-analytics'

import { ANALYTICS_PLUGINS, COOKIE_CONSENT_KEY } from 'components/utils/analytics/index.js'

interface CookieConsentState {
  necessary: boolean // Always true, but included for completeness
  analytics: boolean
}

export type CookieConsentProps = {
  consentDisplayDefaultOpen?: boolean
}

const CookieConsent: React.FC<CookieConsentProps> = ({ consentDisplayDefaultOpen = true }) => {
  const analytics = useAnalytics()
  const [consent, setConsent] = useState<CookieConsentState>({
    necessary: true,
    analytics: false,
  })
  const [open, setOpen] = React.useState(false)

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (savedConsent) {
      const parsedConsent = JSON.parse(savedConsent) as CookieConsentState
      setConsent(parsedConsent)
    }
  }, [analytics.plugins, consentDisplayDefaultOpen])

  const handleSave = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent))

    // Initialize GA if analytics consent was given
    if (consent.analytics) {
      analytics.plugins.enable(ANALYTICS_PLUGINS)
    } else {
      analytics.plugins.disable(ANALYTICS_PLUGINS)
    }
    setOpen(true)
  }, [consent, analytics.plugins])

  const handleChange = useCallback((type: keyof CookieConsentState) => {
    if (type === 'necessary') {
      return
    }

    setConsent(prev => ({
      ...prev,
      [type]: !prev[type],
    }))
  }, [])

  return (
    <Box id="cookie-preferences" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-description">
      <Typography id="cookie-preferences-title" aria-label="cookie-preferences" variant="h3" component="h2" gutterBottom>
        Cookie Preferences
      </Typography>
      <Typography id="cookie-preferences-description" color="textSecondary" flexGrow={1}>
        Please set your preferences below. You can change these settings at any time in the future.
        <br />
        For more details, please see our{' '}
        <Link href="/privacy" color="textPrimary">
          Privacy Policy
        </Link>
        .
      </Typography>

      <Box
        sx={theme => ({
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing(2),
          my: theme.spacing(2),
          p: theme.spacing(4),
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
        })}>
        <Stack direction="row" alignSelf="flex-end" mb={-2}>
          <Button onClick={() => setConsent({ necessary: true, analytics: false })} color="inherit" variant="text" sx={{ textTransform: 'none' }}>
            Reject All
          </Button>
          <Button onClick={() => setConsent({ necessary: true, analytics: true })} color="inherit" variant="text" sx={{ textTransform: 'none' }}>
            Accept All
          </Button>
        </Stack>

        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" alignContent="center">
            <Typography variant="body1" fontWeight="bold">
              Necessary Cookies
            </Typography>
            <Switch slotProps={{ input: { 'aria-label': 'necessary-cookies-toggle' } }} color="default" disabled checked />
          </Stack>
          <Typography variant="body2" color="textSecondary">
            These cookies are essential for the website to function properly and cannot be disabled.
          </Typography>
        </Box>

        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" alignContent="center">
            <Typography variant="body1" fontWeight="bold">
              Analytics Cookies
            </Typography>
            <Switch
              checked={consent.analytics}
              slotProps={{ input: { 'aria-label': 'analytics-cookies-toggle' } }}
              onChange={() => handleChange('analytics')}
              color="default"
            />
          </Stack>
          <Typography variant="body2" color="textSecondary">
            These cookies help us understand how visitors interact with our website, helping us improve our services.
          </Typography>
        </Box>

        <Button onClick={handleSave} variant="outlined" sx={{ alignSelf: 'flex-end' }}>
          Save Preferences
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} sx={{ backgroundColor: 'background.paper', width: '100%' }}>
          Preferences saved!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default CookieConsent
