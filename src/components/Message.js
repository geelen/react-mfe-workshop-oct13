import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const Message = ({ avatar, lines }) => {
  console.log("Rendering Message")
  return (
    <Wrapper>
      <Avatar src={avatar}/>
      <Lines>
        {
          lines.map((line, i) => (
            <div key={i}>{line}</div>
          ))
        }
      </Lines>
    </Wrapper>
  )
}

export default Message
