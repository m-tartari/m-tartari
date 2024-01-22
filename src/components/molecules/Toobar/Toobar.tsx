import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Button, IconButton, List, ListItem, ListItemButton, Stack, SwipeableDrawer, Toolbar, Typography, styled } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const AppBarButton = styled(Button<typeof RouterLink>)(({ theme }) => ({
  textTransform: 'none',
  color: 'inherit',
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))
const DrawerButton = styled(ListItemButton<typeof RouterLink>)(({ theme }) => ({
  textTransform: 'none',
  color: 'inherit',
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))

const CustomToobar = () => {
  const [open, setOpen] = React.useState(false)
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
        <IconButton sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer anchor="right" open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
          <List>
            <ListItem disablePadding>
              <DrawerButton component={RouterLink} to="/">
                <Typography variant="h6">Home</Typography>
              </DrawerButton>
            </ListItem>
            <ListItem disablePadding>
              <DrawerButton component={RouterLink} to="/projects">
                <Typography variant="h6">Projects</Typography>
              </DrawerButton>
            </ListItem>
            <ListItem disablePadding>
              <DrawerButton component={RouterLink} to="/curriculum">
                <Typography variant="h6">Curriculum</Typography>
              </DrawerButton>
            </ListItem>
            <ListItem disablePadding>
              <DrawerButton component={RouterLink} to="/contacts">
                <Typography variant="h6">Contacts</Typography>
              </DrawerButton>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  )
}

export default CustomToobar
