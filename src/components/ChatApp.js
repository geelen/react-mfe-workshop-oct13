import React from 'react'
import styled from 'styled-components'

import ChatWindow from './ChatWindow'
import InputArea from './InputArea'

const FillScreen = styled.div`
  height: 100vh;
`

class ChatApp extends React.Component {
  state = {
    messages: [
      {
        avatar: 'http://fillmurray.com/96/96',
        lines: ['Line one', 'Line two', 'Line three',]
      },
      {
        avatar: 'http://fillmurray.com/98/98',
        lines: ['Line four', 'Line five', 'Line six',]
      },
      {
        avatar: 'http://fillmurray.com/104/104',
        lines: ['Line seven', 'Line eight', 'Line nine',]
      },
    ]
  }

  handleNewMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat({
        avatar: 'http://fillmurray.com/106/106',
        lines: [message]
      })
    })
  }

  render() {
    console.log("Rendering ChatApp")
    return (
      <FillScreen>
        <ChatWindow messages={this.state.messages}/>
        <InputArea onNewMessage={this.handleNewMessage}/>
      </FillScreen>
    )
  }
}

export default ChatApp
