//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import '../test-setup/test-setup'
import GameForm from '../ScattergoriesForm'

describe('<GameForm />', () => {
  it('checks for input forms', () => {
    render(
      <MemoryRouter>
        <GameForm />
      </MemoryRouter>,
    )
    //screen.debug()

    const inputs = screen.getAllByRole('textbox')
    expect(inputs).toHaveLength(10)
  })
})

//new learning: <MemoryRouter> is an in-memory version of a router you can wrap your component in for testing. I had to use this as I had the useNavigate hook as part of the GameForm component

//new learning: its important to check if you are importing hooks from react-router or react-router-dom. Had real issues with getting tests to work and it was a simple errror like this (how I imported useNavigate in my component) that stopped my tests and had me confused for a long time trying to figure it out.

//new learning: screen.debug() prints a snapshot of the current rendered HTML sturcture (DOM) to the test console to inspect if needed
