import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link, Stack, Typography } from '@mui/material'
import PolicyIcon from '@mui/icons-material/Policy'
import CookieIcon from '@mui/icons-material/Cookie'

import { EmailIconLink, GitHubIconLink, LinkedInIconLink } from 'components/atoms/IconLinks/index.js'

const Footer: FC = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      id="footer"
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '@media print': { py: 3 },
      }}>
      <Stack direction="row" gap={2}>
        <LinkedInIconLink fontSize="large" href="https://www.linkedin.com/in/m-tartari/" />
        <GitHubIconLink fontSize="large" href="https://www.github.com/m-tartari/" />
        <EmailIconLink fontSize="large" href="mailto:info@m-tartari.it" />
      </Stack>

      <Typography variant="subtitle2" align="center" color="text.secondary" component="em" mt={3}>
        © {year} Michele Tartari. All rights reserved.
      </Typography>

      <Stack mt={1}>
        <Link component={RouterLink} to="/privacy#cookie-preferences" color="textSecondary">
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <CookieIcon fontSize="inherit" />
            <Typography variant="subtitle2" component="span">
              Cookie Preferences
            </Typography>
          </Stack>
        </Link>
        <Link component={RouterLink} to="/privacy" color="textSecondary">
          <Stack direction="row" alignItems="center" justifyContent="center" gap={1}>
            <PolicyIcon fontSize="inherit" />
            <Typography variant="subtitle2" component="span">
              Privacy Policy
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  )
}

export default Footer
