// IconLinks.test.tsx

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import * as IconLinks from '.'

const labels: { [key: string]: string } = {
  DescriptionIconLink: 'Doc-button',
  EmailIconLink: 'Email-button',
  GitHubIconLink: 'GitHub-button',
  LinkedInIconLink: 'LinkedIn-button',
  AcademyIconLink: 'Academy-button',
  VideoIconLink: 'Video-button',
  ExtrernalIconLink: 'External-link-button',
}
describe('IconLinks', () => {
  const open = vi.spyOn(window, 'open')

  const defaultProps = {
    href: 'https://test.com',
    fontSize: 'large' as const,
  }

  describe.each(Object.entries(IconLinks))('%s', (name, Icon) => {
    test('renders correctly and without crashing', async () => {
      render(<Icon {...defaultProps} />)
      await userEvent.click(screen.getByLabelText(labels[name]))
      expect(open).toHaveBeenCalledTimes(1)
      expect(open).toHaveBeenLastCalledWith(defaultProps.href, '_blank')
    })

    test('stops propagation when the icon button is clicked', async () => {
      const onClick = vi.fn()
      render(
        <div onClick={onClick}>
          <Icon {...defaultProps} />
        </div>
      )
      await userEvent.click(screen.getByLabelText(labels[name]))
      expect(onClick).not.toHaveBeenCalled()
    })

    test("renders the badge when 'index' is provided", () => {
      render(<Icon {...defaultProps} index={1} />)
      expect(screen.getByText(1)).toBeInTheDocument()
    })
  })
})
