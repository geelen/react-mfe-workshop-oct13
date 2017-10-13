import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { addMessage } from './actions'

const MessageForm = styled.form`
  background: moccasin;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`
const InputField = styled.div`
  flex-grow: 1;
  padding-right: 1rem;
  > input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;  
  }
`
const SubmitButton = styled.button`
  font-size: 1.25rem;
  padding: 0.25rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background: mediumseagreen;
  color: white;
`

class InputArea extends React.Component {
  state = { message: '' }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addMessage(this.state.message)
    this.setState({ message: '' })
  }

  handleInput = event => {
    this.setState({ message: event.target.value })
  }

  render() {
    console.log("Rendering InputArea")
    return (
      <MessageForm onSubmit={this.handleSubmit}>
        <InputField>
          <input type="text"
                 value={this.state.message}
                 onChange={this.handleInput}/>
        </InputField>
        <SubmitButton type="submit">⬆</SubmitButton>
      </MessageForm>
    )
  }
}

export default connect(
  null,
  { addMessage }
)(InputArea)
