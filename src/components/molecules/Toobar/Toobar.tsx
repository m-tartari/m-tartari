import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Button, Stack, Toolbar, Typography, styled } from '@mui/material'

const AppBarButton = styled(Button<typeof RouterLink>)(({ theme }) => ({
  textTransform: 'none',
  color: 'inherit',
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))

const CustomToobar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: theme => (theme.palette.mode === 'dark' ? 'transparent' : undefined),
      }}>
      <Toolbar>
        <AppBarButton component={RouterLink} to="/" sx={{ mr: 'auto' }}>
          <Typography variant="h5">Michele Tartari</Typography>
        </AppBarButton>
        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <AppBarButton component={RouterLink} to="/">
            <Typography variant="h6">Home</Typography>
          </AppBarButton>
          <AppBarButton component={RouterLink} to="/projects">
            <Typography variant="h6">Projects</Typography>
          </AppBarButton>
          <AppBarButton component={RouterLink} to="/curriculum">
            <Typography variant="h6">Curriculum</Typography>
          </AppBarButton>
          <Button
            component={RouterLink}
            to="/contacts"
            color="primary"
            variant="contained"
            sx={{
              textTransform: 'none',
            }}>
            <Typography variant="h6">Hire me</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default CustomToobar
