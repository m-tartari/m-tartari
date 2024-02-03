import { Email, LinkedIn, GitHub, Description } from '@mui/icons-material'
import { IconButtonProps } from '@mui/material'

import IconButton from '../IconButton'

interface IconLinkProps extends IconButtonProps {
  href: string
  fontSize?: 'small' | 'large' | 'medium' | 'inherit'
}

export const DescriptionIconLink = ({ href: to, fontSize, ...props }: IconLinkProps) => {
  return (
    <IconButton aria-label="Email-button" onClick={() => window.open(to, '_blank')} {...props}>
      <Description fontSize={fontSize} />
    </IconButton>
  )
}

export const EmailIconLink = ({ href: to, fontSize, ...props }: IconLinkProps) => {
  return (
    <IconButton aria-label="Email-button" onClick={() => window.open(to, '_blank')} {...props}>
      <Email fontSize={fontSize} />
    </IconButton>
  )
}

export const GitHubIconLink = ({ href: to, fontSize, ...props }: IconLinkProps) => {
  return (
    <IconButton aria-label="GitHub-button" onClick={() => window.open(to, '_blank')} {...props}>
      <GitHub fontSize={fontSize} />
    </IconButton>
  )
}

export const LinkedInIconLink = ({ href: to, fontSize, ...props }: IconLinkProps) => {
  return (
    <IconButton aria-label="LinkedIn-button" onClick={() => window.open(to, '_blank')} {...props}>
      <LinkedIn fontSize={fontSize} />
    </IconButton>
  )
}
