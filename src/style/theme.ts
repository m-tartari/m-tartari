import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e44c65',
    },
    secondary: {
      main: '#3f51b5',
    },
    background: {
      default: '#101018',
      paper: '#1b1d27',
    },
  },
})

export default theme
