import React from 'react'

import Message from './Message'
import InputArea from './InputArea'

const FillScreen = 'div'
const ChatWindow = 'div'

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
