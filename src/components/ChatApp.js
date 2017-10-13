import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import InputArea from './InputArea'

const FillScreen = styled.div`
  height: 100vh;
`

const externalFunction = () => '100vh - 4rem'

const ChatWindow = styled.div`
  height: calc(${ props => externalFunction() });
`

const ChatApp = () => (
  <FillScreen>
    <ChatWindow>
      <Message align="right"/>
      <Message/>
      <Message align="right"/>
    </ChatWindow>
    <InputArea/>
  </FillScreen>
)

export default ChatApp
