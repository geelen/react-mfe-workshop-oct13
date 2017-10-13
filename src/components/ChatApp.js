import React from 'react'
import styled from 'styled-components'

import Message from './Message'
import InputArea from './InputArea'

const FillScreen = styled.div`
  height: 100vh;
`
const ChatWindow = styled.div`
  height: calc(100vh - 4rem);
`

const ChatApp = () => (
  <FillScreen>
    <ChatWindow>
      <Message/>
      <Message/>
      <Message/>
    </ChatWindow>
    <InputArea/>
  </FillScreen>
)

export default ChatApp
