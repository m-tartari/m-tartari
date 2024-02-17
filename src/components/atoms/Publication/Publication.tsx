import React from 'react'
import { Box, SxProps, Theme, Typography, TypographyProps } from '@mui/material'
import { ExtrernalIconLink } from '..'

type AwardEntryProps = {
  year: string | number
  title: string
  authors: React.ReactNode
  location: string
  link?: string
  titleProps?: TypographyProps
  Component?: React.ElementType
  sx?: SxProps<Theme>
}

const Publication = ({ Component = Box, ...props }: AwardEntryProps) => {
  return (
    <Component sx={{ pl: 2, ...props.sx }}>
      <Box display="flex" gap={1} alignItems="flex-start">
        <Typography variant="subtitle1" color="primary.main">
          {props.year}
        </Typography>
        <Typography color="text.secondary">
          {props.authors},{' '}
          <Typography component="span" color="text.primary">
            <b>{props.title}</b>
          </Typography>
          , In: {props.location}
          {typeof props.link !== 'undefined' && (
            <ExtrernalIconLink size="small" fontSize="small" href={props.link} sx={{ color: 'text.secondary' }} />
          )}
        </Typography>
      </Box>
    </Component>
  )
}

export default Publication
