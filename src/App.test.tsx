import App from './App'
import { render, screen } from '@testing-library/react'

  it('should have hello world', async () => {
    render(<App />)
    const message = screen.queryByText(/Hello World/)
    expect(message).toBeVisible()
  })

 