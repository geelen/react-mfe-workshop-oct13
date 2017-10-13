import React from 'react'
import styled from 'styled-components'

import ChatWindow from './ChatWindow'
import InputArea from './InputArea'

import store, { addMessageToStore } from '../store'

const FillScreen = styled.div`
  height: 100vh;
`

class ChatApp extends React.Component {
  handleNewMessage = (message) => {
    addMessageToStore({
      avatar: 'http://fillmurray.com/106/106',
      lines: [message]
    })
  }

  render() {
    console.log("Rendering ChatApp")
    return (
      <FillScreen>
        <ChatWindow messages={store.messages}/>
        <InputArea onNewMessage={this.handleNewMessage}/>
      </FillScreen>
    )
  }
}

export default ChatApp
