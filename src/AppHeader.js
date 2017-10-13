import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import { flex } from './utils'

const colors = {
  red: '#e11'
}

const Headline = styled.h1`
  ${ flex.vertical };
  color: ${ colors.red };
  &::after {
    content: '🕸👻';
  }
`

const AfterHeadline = styled.div`
  ${ flex.vertical };
`

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <Headline>{greeting}</Headline>
    <AfterHeadline>Another line</AfterHeadline>
  </header>
)

export default AppHeader
