import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Grid, Typography } from '@mui/material'
import { ExpandMore as ExpandIcon } from '@mui/icons-material'

interface CurriculumEntryProps {
  title: string
  dates: string
  company: string
  location: string
  children?: React.ReactNode
}

const CurriculumItem = (props: CurriculumEntryProps) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        bgcolor: 'background.default', // use summary hover background
        flexDirection: 'row-reverse',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&::before': {
          display: 'none',
        },
        '&:hover': {
          borderBottom: '1px solid',
          borderTop: '1px solid',
          bgcolor: 'background.paper', // use summary hover background
          elevation: 1,
          // '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: 'primary.dark' }, // use summary hover icon color
        },
        '&.Mui-expanded': {
          borderBottom: '1px solid',
          borderTop: '1px solid',
          bgcolor: 'background.paper', // use summary hover background
          elevation: 1,
          // '& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root': { color: 'primary.dark' }, // use summary hover icon color
        },
      }}>
      <AccordionSummary
        expandIcon={<ExpandIcon />}
        sx={{
          flexDirection: 'row-reverse',
          '& .MuiAccordionSummary-expandIconWrapper': {
            transform: 'rotate(-90deg)',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(0deg)',
          },
          '& .MuiAccordionSummary-content': {
            marginLeft: 2,
          },
        }}>
        <Grid container direction="row" justifyContent="space-between" alignItems="stretch">
          <Grid item xs={9} component={Typography} variant="h6">
            <b>{props.title}</b>
          </Grid>
          <Grid item xs={3} component={Typography} variant="h6" color="primary.main" textAlign="right">
            {props.dates}
          </Grid>
          <Grid item xs={9} component={Typography} variant="overline" color="text.secondary">
            {props.company}
          </Grid>
          <Grid item xs={3} component={Typography} variant="subtitle1" color="text.secondary" textAlign="right">
            <em>{props.location}</em>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  )
}

export default CurriculumItem
