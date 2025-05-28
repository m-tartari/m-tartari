import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Typography } from '@mui/material'

import { Page } from 'components/templates/index.js'

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  return (
    <Page sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
      <Typography variant="h1" color="primary.main">
        Oops!
      </Typography>
      <Typography variant="h6">Sorry, an unexpected error has occurred.</Typography>
      {isRouteErrorResponse(error) && (
        <Typography color="text.secondary">
          {error.status} {error.data}
        </Typography>
      )}
    </Page>
  )
}

export default ErrorPage
