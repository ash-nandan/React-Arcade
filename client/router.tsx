import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Scattergories from './components/Scattergories'
import Results from './components/ScattergoriesResult'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="scattergories" element={<Scattergories />} />
    <Route path="scattergories/results" element={<Results />} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
