import React from 'react'

import logo from './logo.svg'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">{greeting}</h1>
  </header>
)

export default AppHeader
