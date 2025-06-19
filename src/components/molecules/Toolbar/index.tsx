import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  styled,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const AppBarButton = styled(Button<typeof RouterLink>)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.mode === 'dark' ? 'inherit' : 'text.secondary',
  ':hover': {
    backgroundColor: 'transparent',
    ...(theme.palette.mode === 'dark' && {
      color: theme.palette.primary.main,
    }),
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

interface CustomToolbarProps extends AppBarProps {
  drawerWidth?: number
  window?: Window
}
const CustomToolbar: React.FC<CustomToolbarProps> = ({ drawerWidth = 240, window, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ?? undefined,
  })

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={theme => ({
        height: '100%',
        textAlign: 'center',
        ...(theme.palette.mode === 'light' && { backgroundColor: 'background.default' }),
      })}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Michele Tartari
      </Typography>
      <Divider />
      <List>
        <ListItem key="Home" disablePadding>
          <DrawerButton component={RouterLink} to="/">
            <ListItemText primary="Home" />
          </DrawerButton>
        </ListItem>
        <ListItem key="Projects" disablePadding>
          <DrawerButton component={RouterLink} to="/projects">
            <ListItemText primary="Projects" />
          </DrawerButton>
        </ListItem>
        <ListItem key="Curriculum" disablePadding>
          <DrawerButton component={RouterLink} to="/curriculum">
            <ListItemText primary="Curriculum" />
          </DrawerButton>
        </ListItem>
        <ListItem key="Contacts" disablePadding>
          <DrawerButton component={RouterLink} to="/contacts">
            <ListItemText primary="Contacts" />
          </DrawerButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <AppBar
        elevation={theme.palette.mode === 'light' ? 1 : 0}
        {...props}
        sx={{
          backgroundColor: trigger ? 'background.paper' : 'transparent',
          ...(theme.palette.mode === 'light' && {
            backgroundColor: 'hsla(0, 0%, 100%, 0.75)',
            backdropFilter: 'blur(8px)',
          }),
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeInOut,
          }),
          ...props.sx,
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            // maxWidth: '100%',
            // [theme.breakpoints.up('md')]: { width: theme => theme.breakpoints.values.lg, mx: 'auto' },
          }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, position: 'absolute', backgroundColor: 'primary' }}>
            <MenuIcon />
          </IconButton>
          <AppBarButton
            component={RouterLink}
            to="/"
            disableRipple
            sx={theme => ({
              color: theme.palette.text.primary,
              [theme.breakpoints.down('md')]: { mx: 'auto' },
              [theme.breakpoints.up('md')]: { mr: 'auto' },
            })}>
            <Typography variant="h6">Michele Tartari</Typography>
          </AppBarButton>
          <Stack component="div" direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <AppBarButton component={RouterLink} to="/" disableRipple>
              <Typography variant="h6">Home</Typography>
            </AppBarButton>
            <AppBarButton component={RouterLink} to="/projects" disableRipple>
              <Typography variant="h6">Projects</Typography>
            </AppBarButton>
            <AppBarButton component={RouterLink} to="/curriculum" disableRipple>
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
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </>
  )
}

export default CustomToolbar
