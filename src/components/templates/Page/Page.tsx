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
      <Container component="main" sx={{ mt: 12, mb: 4, minHeight: '80vh', ...props.sx }} maxWidth="sm">
        {/* Children is included in props */}
        {title && (
          <>
            <Typography
              variant="h2"
              aria-label="page-title"
              sx={{ textAlign: 'center', borderColor: 'primary.main', borderBottomStyle: 'solid', borderBottomWidth: 2, mt: 6, mb: 4, p: 6 }}>
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
