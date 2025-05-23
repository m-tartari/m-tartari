import { Box, Stack, Typography } from '@mui/material'

import { EmailIconLink, GitHubIconLink, LinkedInIconLink } from 'components/atoms'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }} component="footer">
      <Stack direction="row" gap={2}>
        <LinkedInIconLink fontSize="large" href="https://www.linkedin.com/in/m-tartari/" />
        <GitHubIconLink fontSize="large" href="https://www.github.com/m-tartari/" />
        <EmailIconLink fontSize="large" href="mailto:info@m-tartari.eu" />
      </Stack>
      <Typography variant="subtitle2" align="center" color="text.secondary" component="em" mt={3}>
        &copy; {year} Michele Tartari. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
