import React from 'react'
import { Box, SxProps, Theme, Typography, TypographyProps } from '@mui/material'

type ExtracurricularProps = {
  title: string
  year?: string | number
  titleProps?: TypographyProps
  Component?: React.ElementType
  sx?: SxProps<Theme>
}

const Extracurricular = ({ Component = Box, ...props }: ExtracurricularProps) => {
  return (
    <Component sx={{ pl: 2, ...props.sx }} display="flex" columnGap={1} alignItems="flex-start">
      <Typography variant="body1" flexGrow={1} {...props.titleProps}>
        {props.title}
      </Typography>
      {props.year && (
        <Typography variant="subtitle1" color="primary.main">
          {props.year}
        </Typography>
      )}
    </Component>
  )
}

export default Extracurricular
