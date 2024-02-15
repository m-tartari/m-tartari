import { Email, LinkedIn, GitHub, Description, OndemandVideo, School } from '@mui/icons-material'
import { Badge, IconButtonProps, SvgIcon } from '@mui/material'

import IconButton from '../IconButton'

interface IconLinkProps extends IconButtonProps {
  href: string
  fontSize?: 'small' | 'large' | 'medium' | 'inherit'
  index?: number
}

interface IconWrapperProps extends IconLinkProps {
  Icon: typeof SvgIcon
}

const IconWrapper = ({ index, href: to, fontSize, Icon, ...props }: IconWrapperProps) => {
  if (typeof index === 'undefined') {
    return (
      <IconButton
        onClick={e => {
          e.stopPropagation()
          window.open(to, '_blank')
        }}
        {...props}>
        <Icon fontSize={fontSize} />
      </IconButton>
    )
  }
  return (
    <IconButton onClick={() => window.open(to, '_blank')} {...props}>
      <Badge badgeContent={index}>
        <Icon fontSize={fontSize} />
      </Badge>
    </IconButton>
  )
}

export const DescriptionIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Email-button" Icon={Description} {...props} />
export const EmailIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Email-button" Icon={Email} {...props} />
export const GitHubIconLink = (props: IconLinkProps) => <IconWrapper aria-label="GitHub-button" Icon={GitHub} {...props} />
export const LinkedInIconLink = (props: IconLinkProps) => <IconWrapper aria-label="LinkedIn-button" Icon={LinkedIn} {...props} />
export const AcademyIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Academy-button" Icon={School} {...props} />
export const VideoIconLink = (props: IconLinkProps) => <IconWrapper aria-label="Video-button" Icon={OndemandVideo} {...props} />
