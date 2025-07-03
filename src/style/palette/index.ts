import { PaletteOptions } from '@mui/material'

export const dark: PaletteOptions = {
  mode: 'dark',
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
}
export const light: PaletteOptions = {
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
}

export default { dark, light }
