import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'

const App = () => {
  return <MemoryRouter>{renderRoutes(routes)}</MemoryRouter>
}

export default App
