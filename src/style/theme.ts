/* istanbul ignore file */
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import typography from './typography/index.js'
import palette from './palette/index.js'

let theme = createTheme({
  typography: typography,
  colorSchemes: {
    light: { palette: palette.light },
    dark: { palette: palette.dark },
  },
  components: {
    MuiCollapse: {
      styleOverrides: {
        hidden: {
          '@media print': {
            visibility: 'visible',
            height: 'auto',
          },
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme
