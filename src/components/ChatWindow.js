import React from 'react'
import styled from 'styled-components'

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

const ChatWindow = () => (
  <Wrapper>
    <Message/>
    <Message/>
    <Message/>
  </Wrapper>
)

export default ChatWindow
