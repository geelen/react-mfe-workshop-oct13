import React from 'react'
import styled from 'styled-components'

const MessageEntry = styled.div`
  display: flex;
`

const Avatar = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`

const Lines = styled.div`
  line-height: 1.3;
`

const Message = () => (
  <MessageEntry>
    <Avatar src="http://fillmurray.com/96/96"/>
    <Lines>
      <div>Line one</div>
      <div>Line two</div>
      <div>Line three</div>
    </Lines>
  </MessageEntry>
)

export default Message
