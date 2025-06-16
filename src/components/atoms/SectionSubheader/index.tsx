import { Typography, TypographyProps } from '@mui/material'
import { FC } from 'react'

const Subheader: FC<TypographyProps> = props => <Typography variant="h5" component="h3" fontFamily="Oswald, sans-serif" gutterBottom {...props} />

export default Subheader
