import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import GameForm from '../ScattergoriesForm'

describe('<GameForm />', () => {
  it('has the correct structure', () => {
    const { container } = render(<GameForm />)
    expect(container).toMatchSnapshot()
  })
})
