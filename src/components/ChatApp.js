import React from 'react'
import styled from 'styled-components'

import ChatWindow from './ChatWindow'
import InputArea from './InputArea'

const FillScreen = styled.div`
  height: 100vh;
`

class ChatApp extends React.Component {
  render() {
    console.log("Rendering ChatApp")
    return (
      <FillScreen>
        <ChatWindow/>
        <InputArea/>
      </FillScreen>
    )
  }
}

export default ChatApp
