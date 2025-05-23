import React from 'react'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'

import { EmailIconLink, GitHubIconLink, LinkedInIconLink } from 'components/atoms'
import { ExpandMore } from '@mui/icons-material'

const Hero = (props: { scrollTarget?: React.ForwardedRef<HTMLSelectElement> }) => {
  return (
    <Box
      sx={{
        position: 'relative',

        minHeight: '100vh',
        boxShadow: '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25)',

        backgroundImage: 'url("images/banner-blur.webp")',
        backgroundPosition: 'center center',
        backgroundAttachment: { xs: 'scroll !important', md: 'fixed' },
        backgroundSize: 'cover',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        wrap: 'wrap',
      }}>
      <Box
        sx={theme => ({
          maxWidth: '95%',
          marginRight: '1%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '3em',

          [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            textAlign: 'center',
            padding: '3em',
          },
          [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            textAlign: 'right',
            padding: '6em',
          },
        })}>
        <Box>
          {/*
              <h2>Michele Tartari</h2>
							<h3>Robotics Engineer</h3>
             */}
          <Typography
            // sx={{ fontSize: '2.5em',margin: 0 }}
            variant="h3">
            Robotics Engineer
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              // margin: { xs: '0.5em 1em', md: '0.5em 0 0 0' },
              margin: '0.5em 0 0 0',
              top: 0,
            }}>
            See some of my works below. Send a message to get in touch.
          </Typography>
          <Stack direction="row" gap={2} mt={2} justifyContent={{ xs: 'center', sm: 'end' }}>
            <LinkedInIconLink sx={{ color: 'text.secondary' }} fontSize="large" href="https://www.linkedin.com/in/m-tartari/" />
            <GitHubIconLink sx={{ color: 'text.secondary' }} fontSize="large" href="https://www.github.com/m-tartari/" />
            <EmailIconLink sx={{ color: 'text.secondary' }} fontSize="large" href="mailto:info@m-tartari.eu" />
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
          onClick={() => (props.scrollTarget as React.RefObject<HTMLSelectElement | null>).current?.scrollIntoView()}
          sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', p: 1, bottom: 3 }}>
          <ExpandMore fontSize="large" />
        </IconButton>
      )}
    </Box>
  )
}

export default Hero
