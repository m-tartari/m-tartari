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
    <Component sx={{ ...props.sx }}>
      <Box pl={2} display="flex" alignItems="flex-start" columnGap={1} flexWrap="wrap-reverse">
        <Typography variant="body1" flexGrow={1} {...props.titleProps}>
          {props.title}
        </Typography>
        {props.year && (
          <Typography variant="subtitle1" color="primary.main" flexGrow={0}>
            {props.year}
          </Typography>
        )}
      </Box>
    </Component>
  )
}

export default Extracurricular
