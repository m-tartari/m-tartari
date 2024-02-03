import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

interface CurriculumEntryProps {
  title: string
  dates: string
  company: string
  children?: React.ReactNode
}

const CurriculumItem = (props: CurriculumEntryProps) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandIcon />}>
        <Box>
          <Typography component="em" variant="h6" color="primary">
            {props.dates}
          </Typography>
          &nbsp; &nbsp;
          <Typography component="b" variant="h6">
            {props.title}
          </Typography>
          <br />
          <Typography component="span" variant="overline" color="text.secondary">
            {props.company}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default CurriculumItem
