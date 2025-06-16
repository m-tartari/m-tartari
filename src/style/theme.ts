/* istanbul ignore file */
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
// A custom theme for this app
let theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Base font for headings

    h1: {
      fontFamily: 'Oswald, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Oswald, sans-serif',
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Oswald, sans-serif',
      fontWeight: 700,
    },
  },
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

theme = responsiveFontSizes(theme)

export default theme
