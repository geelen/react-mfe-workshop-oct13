import React from 'react'
import styled from 'styled-components'

const MessageEntry = styled.div`
  ${ props => props.align === "right" && `
    text-align: right;
  ` }
`

const Avatar = 'div'
const Lines = 'div'

const Message = ({ align }) => (
  <MessageEntry align={align}>
    <Avatar/>
    <Lines>
      <div>Line one</div>
      <div>Line two</div>
      <div>Line three</div>
    </Lines>
  </MessageEntry>
)

export default Message
