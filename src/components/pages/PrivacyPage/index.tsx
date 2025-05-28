import React from 'react'

import Page from 'components/templates/Page/index.js'
import CookiePreferences from 'components/molecules/CookiePreferences/index.js'
import PrivacyPolicy from 'components/molecules/PrivacyPolicy/index.js'
import { Divider } from '@mui/material'

const PrivacyPage: React.FC = () => {
  return (
    <Page title="Privacy" showCookieConsent={false}>
      <PrivacyPolicy />
      <Divider sx={{ my: 4 }} />
      <CookiePreferences />
    </Page>
  )
}

export default PrivacyPage
