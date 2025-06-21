//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

import '../../test/test-setup.tsx'
import EmojiParty from '../EmojiParty.tsx'
import { button } from 'framer-motion/client'

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
  it('Emoji should change on click', async () => {
    //Arange
    render(<EmojiParty />)
    const user = userEvent.setup()

    //Act
    const emoji = screen.getAllByRole(/[😎🤥🤩😜']/u)
    const initialEmoji = emoji.textContent
    await user.click(emoji)
    //Assert
    expect(emoji.textContent).not.toBe(initialEmoji)
  })
})
