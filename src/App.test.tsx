import { render, screen } from '@testing-library/react'

import App from './App'

describe('App component', () => {
  test('renders MainPage without crashing', async () => {
    render(<App />)

    expect(screen.getByLabelText('loading-screen')).toBeInTheDocument()
    expect(await screen.findByText('Robotics Engineer')).toBeInTheDocument()
    expect(screen.queryByLabelText('loading-screen')).not.toBeInTheDocument()
  })
})
