import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'

ReactDOM.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>,
  document.getElementById('root')
)
