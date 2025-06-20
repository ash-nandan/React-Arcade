import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Emoji from './components/EmojiParty'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="emojiparty" element={<Emoji />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
