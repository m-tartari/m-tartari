import { IconButton as MuiIconButton, styled } from '@mui/material'

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  ':hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}))
export default IconButton
