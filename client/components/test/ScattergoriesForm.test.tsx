//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'

import '../test-setup/test-setup'
import GameForm from '../ScattergoriesForm'

describe('<GameForm />', () => {
  it('checks for letter prompt text', () => {
    ;<MemoryRouter>
      render(
      <GameForm />)
    </MemoryRouter>

    const letterPrompt = screen.getByRole('heading', {
      name: /your chosen letter is/i,
    })
    expect(letterPrompt).toBeInTheDocument()
  })
})
