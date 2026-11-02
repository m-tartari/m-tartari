import React from 'react'
import { Box, Typography } from '@mui/material'

import { SectionHeader } from 'components/atoms/index.js'

export type CookieConsentProps = {
  consentDisplayDefaultOpen?: boolean
}

const CookieConsent: React.FC<CookieConsentProps> = () => {
  return (
    <Box id="cookie-preferences" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-description">
      <SectionHeader color="inherit" id="cookie-preferences-title" aria-label="cookie-preferences">
        Cookie Policy
      </SectionHeader>

      <Typography component="p" color="textSecondary">
        Michele Tartari, con sede legale in via Argine Ducale n. 37/E, 44122 Ferrara, Titolare del trattamento dei dati, informa gli utenti del sito{' '}
        {window.location.host} di non utilizzare alcun tipo di coockie per il funzionamento di suddetto sito web.
      </Typography>
    </Box>
  )
}

export default CookieConsent
