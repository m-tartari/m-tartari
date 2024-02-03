import React from 'react'
import { Box, BoxProps, Container, Typography } from '@mui/material'

import { Footer, Toobar } from 'components/molecules'

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
      <Toobar />
      <Container
        component="main"
        maxWidth={false}
        sx={{
          mt: 12,
          mb: 4,
          minHeight: '80vh',
          mx: 'auto',
          maxWidth: 'calc(100% - 4em)',
          width: '70em',
          ...props.sx,
        }}>
        {/* Children is included in props */}
        {title && (
          <>
            <Typography
              variant="h2"
              aria-label="page-title"
              sx={{
                textAlign: 'center',
                borderColor: 'primary.main',
                borderBottomStyle: 'solid',
                borderBottomWidth: 2,
                mx: 'auto',
                mt: 6,
                mb: 4,
                p: 6,
                width: '60%',
              }}>
              {title}
            </Typography>
          </>
        )}
        {children}
      </Container>
      <Footer />
    </Box>
  )
}

export default Page
