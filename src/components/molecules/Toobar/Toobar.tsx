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
} from '@mui/material'
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

interface CustomToobarProps extends AppBarProps {
  drawerWidth?: number
}
const CustomToobar: React.FC<CustomToobarProps> = ({ drawerWidth = 240, ...props }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
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
        {/* <ListItem disablePadding>
              <DrawerButton component={RouterLink} to="/">
                <Typography variant="h6">Home</Typography>
              </DrawerButton>
            </ListItem> */}
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
        elevation={0}
        {...props}
        sx={{
          backgroundColor: theme => (theme.palette.mode === 'dark' ? 'background.paper' : undefined),
          ...props.sx,
        }}>
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' }, position: 'absolute', backgroundColor: 'primary' }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: { xs: 'center', md: 'left' } }}>
            Michele Tartari
          </Typography>
          <Stack component="div" direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
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

export default CustomToobar
