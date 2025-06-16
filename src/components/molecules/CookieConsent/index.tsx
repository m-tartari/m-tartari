import { useState, useEffect, useCallback } from 'react'
import { Box, Button, Link, Stack, Typography, Unstable_TrapFocus as TrapFocus, Paper, Fade } from '@mui/material'
import { useAnalytics } from 'use-analytics'

import { ANALYTICS_PLUGINS, COOKIE_CONSENT_KEY } from 'components/utils/analytics/index.js'
import { SectionSubheader } from 'components/atoms/index.js'

interface Consent {
  necessary: boolean // Always true, but included for completeness
  analytics: boolean
}

const CookieConsent = () => {
  const [open, setOpen] = useState<boolean>(false)
  const analytics = useAnalytics()

  useEffect(() => {
    // Check if user has already given consent
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (!savedConsent) {
      setOpen(true)
    } else {
      const parsedConsent = JSON.parse(savedConsent) as Consent
      if (parsedConsent.analytics) {
        analytics.plugins.enable(ANALYTICS_PLUGINS)
      }
    }
  }, [analytics])

  const handleAcceptAll = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics: true, necessary: true }))
    analytics.plugins.enable(ANALYTICS_PLUGINS)
    setOpen(false)
  }, [analytics.plugins])

  const handleRejectAll = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics: false, necessary: true }))
    analytics.plugins.disable(ANALYTICS_PLUGINS)
    setOpen(false)
  }, [analytics.plugins])

  return (
    <>
      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={open}>
          <Paper
            role="dialog"
            aria-modal="false"
            // aria-label="Cookie banner"
            aria-labelledby="cookie-consent-dialog-title"
            aria-describedby="cookie-consent-dialog-description"
            variant="outlined"
            tabIndex={-1}
            sx={theme => ({
              position: 'fixed',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%, 0)',
              width: theme.breakpoints.values.sm,
              maxWidth: `calc(100% - ${theme.spacing(2)})`,
              mb: theme.spacing(1),
              p: theme.spacing(3),
              zIndex: 9999,
            })}>
            <Box>
              <SectionSubheader id="cookie-consent-dialog-title" component="h2" variant="h6">
                Cookie Preferences
              </SectionSubheader>
              <Typography id="cookie-consent-dialog-description" variant="body2" color="textSecondary">
                <span style={{ display: 'inline-block' }}>We use cookies to improve your browsing experience and analyze our traffic.</span>
                <span style={{ display: 'inline-block' }}>By clicking "Accept All", you consent to our use of cookies.</span>
                <span style={{ display: 'inline-block' }}>
                  For more details, please see our{' '}
                  <Link href="/privacy" color="textPrimary">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </Typography>
            </Box>

            <Stack direction="row" sx={{ mt: 2, flexGrow: 0, flexShrink: 0, alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
              <Link href="/privacy#cookie-preferences" color="textPrimary">
                Customize
              </Link>
              <Button onClick={handleRejectAll} size="small" color="inherit" variant="outlined">
                Reject All
              </Button>
              <Button onClick={handleAcceptAll} size="small" color="inherit" variant="outlined">
                Accept All
              </Button>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
    </>
  )
}

export default CookieConsent
