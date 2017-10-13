import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Message from './Message'

const Wrapper = styled.div`
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  > :not(:first-child) {
    margin-top: 1rem;
  }
`

const ChatWindow = ({ messages }) => {
  console.log("Rendering ChatWindow")
  return (
    <Wrapper>
      {
        messages.map((message, i) => (
          <Message key={i} {...message}/>
        ))
      }
    </Wrapper>
  )
}

export default connect(
  store => ({
    messages: store.messages
  })
)(ChatWindow)
