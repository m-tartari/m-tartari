import React from 'react'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'

import { EmailIconLink, GitHubIconLink, LinkedInIconLink } from 'components/atoms/IconLinks/index.js'

const Hero = (props: { scrollTarget?: React.ForwardedRef<HTMLSelectElement> }) => {
  return (
    <Box
      sx={theme => ({
        position: 'relative',

        minHeight: '100vh',
        boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)',

        backgroundImage: 'url("images/banner.webp")',
        backgroundPosition: 'center center',
        backgroundAttachment: { xs: 'scroll !important', md: 'fixed' },
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap',

        ...(theme.palette.mode === 'dark' && {
          backgroundImage: 'url("images/banner-blur.webp")',
        }),
        ...(theme.palette.mode === 'light' && {
          backgroundImage: 'url("images/banner.webp")',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,

            backgroundImage: 'inherit',
            backgroundPosition: 'center center',
            backgroundAttachment: 'inherit',
            backgroundSize: 'cover',

            filter: 'blur(5px)',
          },
        }),
      })}>
      <Box
        color="white"
        sx={theme => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3em',
          zIndex: 1,

          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
            padding: '2em',
          },
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            textAlign: 'right',
            padding: '6em',
          },
        })}>
        <Box>
          <Typography variant="h1">
            Robotics
            <br /> Engineer
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              color: t => (t.palette.mode === 'light' ? 'inherit' : 'text.secondary'),
              margin: '0.5em 0 0 0',
              pt: 1,
            }}>
            Discover some of my works below.
            <br /> Send a message to get in touch.
          </Typography>
          <Stack
            direction="row"
            gap={2}
            mt={2}
            justifyContent={{ xs: 'center', md: 'end' }}
            color={t => (t.palette.mode === 'light' ? 'inherit' : 'text.secondary')}>
            <LinkedInIconLink fontSize="large" href="https://www.linkedin.com/in/m-tartari/" />
            <GitHubIconLink fontSize="large" href="https://www.github.com/m-tartari/" />
            <EmailIconLink fontSize="large" href="mailto:info@m-tartari.eu" />
          </Stack>
        </Box>
        <Avatar
          alt="Avatar"
          src="images/me.jpg"
          sx={{
            display: 'inline-block',
            verticalAlign: 'middle',
            height: { xs: '8em', md: '18em' },
            width: { xs: '8em', md: '18em' },
          }}
        />
      </Box>

      {props.scrollTarget && (
        <IconButton
          size="large"
          onClick={() => (props.scrollTarget as React.RefObject<HTMLElement | null>).current?.scrollIntoView()}
          sx={{
            position: 'absolute',
            p: 1,
            bottom: 2,
            left: '50%',
            transform: 'translate(-50%, 0)',
            color: t => (t.palette.mode === 'light' ? 'white' : 'text.primary'),
          }}>
          <ExpandMore fontSize="large" />
        </IconButton>
      )}
    </Box>
  )
}

export default Hero
