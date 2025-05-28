/* istanbul ignore file */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { AnalyticsProvider } from 'use-analytics'
import { ThemeProvider, CssBaseline } from '@mui/material'

import analytics from 'components/utils/analytics/index.js'
import theme from 'style/theme.js'
import App from './App.js'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AnalyticsProvider instance={analytics}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AnalyticsProvider>
  </React.StrictMode>
)
