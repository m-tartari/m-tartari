import React from 'react'
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'
import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { useViewport } from '../../utils/viewport'

type AnchorType = 'left' | 'top' | 'right' | 'bottom'

type Props = {
  image: string
  title: string
  caption: React.ReactNode
  children: React.ReactNode
  mobileImage?: string
  ref?: React.ForwardedRef<HTMLSelectElement>
  anchor?: AnchorType
  scrollTarget?: React.ForwardedRef<HTMLSelectElement>
}

const Description = (props: Props) => {
  const theme = useTheme()

  switch (props.anchor) {
    case 'bottom':
      return (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            position: 'absolute',
            bgcolor: 'background.default',
            opacity: 0.9,
            bottom: '0',

            borderTopStyle: 'solid',
            borderTopWidth: theme.spacing(0.5),
            borderTopColor: theme.palette.primary.main,
            p: `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(5.5)} ${theme.spacing(5)}`,
          }}>
          <Grid container spacing={2} maxWidth="xl">
            <Grid item xs={12} md={4}>
              <Typography variant="h4">{props.title}</Typography>
              {props.caption}
            </Grid>
            <Grid item component={Typography} xs={12} md={8}>
              {props.children}
            </Grid>
          </Grid>
        </Box>
      )
    case 'top':
      return (
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bgcolor: 'background.default',
            opacity: 0.9,
            top: '0',
            ml: 'auto',
            borderBottomWidth: theme.spacing(0.5),
            // borderTopWidth: '0.35em',
            borderBottomStyle: 'solid',
            borderBottomColor: theme.palette.primary.main,
            p: `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          }}>
          <Grid container spacing={2} maxWidth="xl">
            <Grid item xs={12} md={4}>
              <Typography variant="h4">{props.title}</Typography>
              {props.caption}
            </Grid>
            <Grid item component={Typography} xs={12} md={8}>
              {props.children}
            </Grid>
          </Grid>
        </Box>
      )
    case 'right':
      return (
        <Box
          sx={{
            height: '102%',
            width: '28em',
            position: 'absolute',
            bgcolor: 'background.default',
            opacity: 0.9,
            right: '0',
            borderLeftWidth: theme.spacing(0.5),
            // borderLeftWidth: '0.35em',
            borderLeftStyle: 'solid',
            borderLeftColor: theme.palette.primary.main,
            p: `${theme.spacing(3)} ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          }}>
          <Typography variant="h4">{props.title}</Typography>
          {props.caption}
          <Typography mt={3}>{props.children}</Typography>
        </Box>
      )
    case 'left':
      return (
        <Box
          sx={{
            height: '102%',
            width: '28em',
            position: 'absolute',
            bgcolor: 'background.default',
            opacity: 0.9,
            left: '0',
            borderRightWidth: theme.spacing(0.5),
            // borderLeftWidth: '0.35em',
            borderRightStyle: 'solid',
            borderRightColor: theme.palette.primary.main,
            p: `${theme.spacing(3)} ${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(5)}`,
            // p: '5.1em 3.1em 3.1em 3.1em',
          }}>
          <Typography variant="h4">{props.title}</Typography>
          {props.caption}
          <Typography mt={3}>{props.children}</Typography>
        </Box>
      )
  }
}

const DesktopComponent = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  return (
    <section ref={ref}>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              // translateY: [0, 30],
              // scale: [1, 0.5, 'easeOutCubic'],
              // shouldAlwaysCompleteAnimation: true,
              image: props.image,
              expanded: false,
              speed: -20,
            },
          ]}
          style={{
            // width: '150%',
            // marginLeft: '-25%',
            minHeight: '100vh',
            position: 'relative',

            height: '100vh',
            overflow: 'hidden',
          }}>
          <Description {...props} />
          {props.scrollTarget && (
            <IconButton
              size="large"
              onClick={() => (props.scrollTarget as React.MutableRefObject<HTMLSelectElement | null>).current?.scrollIntoView()}
              sx={{ position: 'absolute', p: 1, bottom: 2, left: '50%', transform: 'translate(-50%, 0)' }}>
              <ExpandMore fontSize="large" />
            </IconButton>
          )}
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
  )
})

const MobileComponent = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const theme = useTheme()
  return (
    <>
      <Box
        ref={ref}
        component="img"
        sx={{
          width: '100%',
          height: '100%',
          maxHeight: '60vh',
        }}
        src={props.mobileImage ?? props.image}
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          borderTopStyle: 'solid',
          borderTopWidth: theme.spacing(0.5),
          borderTopColor: theme.palette.primary.main,
          p: `${theme.spacing(7)} ${theme.spacing(5)} ${theme.spacing(5.5)} ${theme.spacing(5)}`,
        }}>
        <Grid container spacing={2} maxWidth="xl">
          <Grid item xs={12} md={4}>
            <Typography variant="h4">{props.title}</Typography>
            {props.caption}
          </Grid>
          <Grid item component={Typography} xs={12} md={8}>
            {props.children}
          </Grid>
        </Grid>
      </Box>
    </>
  )
})

const ProjectSpotlight = React.forwardRef<HTMLSelectElement, Props>((props, ref) => {
  const { width } = useViewport()
  const theme = useTheme()

  return width < theme.breakpoints.values.md ? <MobileComponent {...props} ref={ref} /> : <DesktopComponent {...props} ref={ref} />
})

export default ProjectSpotlight
