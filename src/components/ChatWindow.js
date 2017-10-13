import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import Message from './Message'
import store from '../store'

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

const ChatWindow = () => {
  console.log("Rendering ChatWindow")
  return (
    <Wrapper>
      {
        store.messages.map((message, i) => (
          <Message key={i} {...message}/>
        ))
      }
    </Wrapper>
  )
}

export default observer(ChatWindow)
