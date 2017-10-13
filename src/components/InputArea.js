import React from 'react'
import styled from 'styled-components'

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
  handleSubmit = event => {
    event.preventDefault()
    console.log("Submitted!!")
  }

  render() {
    return (
      <MessageForm onSubmit={this.handleSubmit}>
        <InputField>
          <input type="text"/>
        </InputField>
        <SubmitButton type="submit">⬆</SubmitButton>
      </MessageForm>
    )
  }
}

export default InputArea
