//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

import '../../test/test-setup.tsx'
import EmojiParty from '../EmojiParty.tsx'

describe('<EmojiParty/>', async () => {
  it('timer should start at 25 seconds', async () => {
    // Arrange
    render(<EmojiParty />)

    // Act

    // Assert
    await waitFor(() => {
      const time = screen.getByText(/⏱ Time Left:/)
      expect(time.textContent).toMatch(/⏱ Time Left: 25s$/)
    })
  })
  it.todo('Emoji should change on click', () => {
    //Arange
    render(<EmojiParty />)
    const user = userEvent.setup()

    //Act
    const emoji = screen.getByRole
    //Assert
  })
})
