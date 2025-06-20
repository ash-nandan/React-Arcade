//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '../test-setup/test-setup'
import GameForm from '../ScattergoriesForm'
