import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const ErrorPage: React.FC = () => {
  const error: unknown = useRouteError()
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh">
      <Typography variant="h1" color="primary.main">
        Oops!
      </Typography>
      <Typography variant="h6">Sorry, an unexpected error has occurred.</Typography>
      {isRouteErrorResponse(error) && (
        <Typography color="text.secondary">
          {error.status} {error.data}
        </Typography>
      )}
    </Box>
  )
}

export default ErrorPage
