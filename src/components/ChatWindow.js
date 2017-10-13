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

const messages = [
  {
    avatar: 'http://fillmurray.com/96/96',
    lines: [
      'Line one',
      'Line two',
      'Line three',
    ]
  },
  {
    avatar: 'http://fillmurray.com/98/98',
    lines: [
      'Line four',
      'Line five',
      'Line six',
    ]
  },
  {
    avatar: 'http://fillmurray.com/104/104',
    lines: [
      'Line seven',
      'Line eight',
      'Line nine',
    ]
  },
]

const ChatWindow = () => (
  <Wrapper>
    {
      messages.map((message, i) => (
        <Message key={i} {...message}/>
      ))
    }
  </Wrapper>
)

export default ChatWindow
