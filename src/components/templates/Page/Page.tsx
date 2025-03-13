import React from 'react'
import { Box, BoxProps, Container, Divider, Typography } from '@mui/material'

import { Footer, Toolbar } from 'components/molecules'

/**
 * React function component that implements the default page template.
 * @see BoxProps from '@mui/material' for props
 */
const Page: React.FC<BoxProps> = ({ title, children, ...props }) => {
  React.useEffect(() => {
    if (title) {
      document.title = `Michele Tartari - ${title}`
    }
  }, [title])

  return (
    <Box sx={{ flexGrow: 1 }} aria-label="page">
      <Toolbar />
      {title && (
        <>
          <Typography
            variant="h2"
            aria-label="page-title"
            textAlign="center"
            sx={{
              mt: 6,
              p: 6,
            }}>
            {title}
          </Typography>
          <Divider
            variant="middle"
            sx={{
              borderColor: 'primary.main',
              borderStyle: 'solid',
              borderWidth: 2,
              mx: 'auto',
              mb: 4,
              width: '30em',
              maxWidth: 'calc(60% - 2.5em)',
            }}
          />
        </>
      )}
      <Container
        component="main"
        maxWidth={false}
        sx={{
          mt: 12,
          mb: 4,
          minHeight: '80vh',
          mx: 'auto',
          maxWidth: { xs: '100%', md: 'calc(100% - 4em)' },
          width: '70em',
          ...props.sx,
        }}>
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Page
