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

class Message extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.message !== this.props.message
  }

  render() {
    const { avatar, lines } = this.props.message
    console.log(`Rendering Message for avatar ${avatar}`)

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
}

export default Message
