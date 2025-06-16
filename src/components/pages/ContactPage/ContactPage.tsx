import { Link, List, ListItem, Stack, Typography } from '@mui/material'
import DraftsIcon from '@mui/icons-material/Drafts'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { Page } from 'components/templates/index.js'

interface ListItemProps {
  children?: React.ReactNode
  href?: string
}
const ListItemLink: React.FC<ListItemProps> = ({ children, ...props }) => (
  <ListItem>
    <Link
      {...props}
      rel="noopener noreferrer"
      target="_blank"
      underline="hover"
      sx={theme => ({
        color: 'inherit',

        h6: {
          color: theme.palette.text.secondary,
        },
        ':hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          h6: {
            color: theme.palette.primary.dark,
          },
        },
      })}>
      <Stack direction="row" alignItems="center">
        {children}
      </Stack>
    </Link>
  </ListItem>
)

const ContactPage = () => {
  return (
    <Page title="Contacts">
      <Typography align="left" variant="h6">
        Feel free to contact me using any of the following:
      </Typography>
      <List>
        <ListItemLink href="mailto:info@m-tartari.eu" aria-label="Email link">
          <DraftsIcon fontSize="large" />
          <Typography variant="h6" ml={2}>
            info
            <wbr />
            @m-tartari.eu
          </Typography>
        </ListItemLink>
        <ListItemLink aria-label="LinkedIn link" href="https://www.linkedin.com/in/m-tartari/">
          <LinkedInIcon fontSize="large" />
          <Typography variant="h6" ml={2}>
            m-tartari
          </Typography>
        </ListItemLink>
        <ListItemLink aria-label="GitHub link" href="https://www.github.com/m-tartari/">
          <GitHubIcon fontSize="large" />
          <Typography variant="h6" ml={2}>
            m-tartari
          </Typography>
        </ListItemLink>
      </List>
    </Page>
  )
}

export default ContactPage
