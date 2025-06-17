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
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#e44c65', // Rouge Red (similar)
          // main:'#df4661', // Pantone PMS 198 C
        },
        secondary: {
          main: '#3f51b5', // Early Spring Night (similar)
          // main: '#3a5dae', // Pantone 7455 C Color
        },
        background: {
          default: '#101018',
          paper: '#1b1d27',
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: '#AC1D1B', // Casual Red
          // main: '#AF231C' //  Pantone 2350 C
          // main: '#AB2328' // Pantone 7621 C
        },
        secondary: {
          main: '#006269', // Pantone 7715 C
        },
        background: { default: '#fafafa', paper: '#eeeeee' }, // Light background
        text: { secondary: '#666' }, // Dark text for readability
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
