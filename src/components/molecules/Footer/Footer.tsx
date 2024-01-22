import { Box, IconButton as MuiIconButton, Stack, Typography, styled } from '@mui/material'
import { Email as EmailIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 6, display: 'flex', alignItems: 'center', flexDirection: 'column' }} component="footer">
      <Stack direction="row">
        <IconButton size="large" aria-label="LinkedIn-button" onClick={() => window.open('https://www.linkedin.com/in/m-tartari/', '_blank')}>
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" aria-label="GitHub-button" onClick={() => window.open('https://www.github.com/m-tartari/', '_blank')}>
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton size="large" aria-label="Email-button" onClick={() => window.open('mailto:michele.tartari+web@live.com', '_blank')}>
          <EmailIcon fontSize="large" />
        </IconButton>
      </Stack>
      <Typography variant="subtitle2" align="center" color="text.secondary" component="em" mt={3}>
        &copy; {year} Michele Tartari. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer
