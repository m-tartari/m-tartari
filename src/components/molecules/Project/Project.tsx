import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

const Project = (props: { title: string; children?: React.ReactNode }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandIcon />}>
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default Project
