import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import AppRoute from './route/AppRoute'

class App extends Component {
  render() {
    return (
        <>
          <BrowserRouter>

            <AppRoute/>
          
          </BrowserRouter>
          </>
    )
  }
}

export default App
