import React from 'react'
import styled from 'styled-components'

const BottomSection = styled.div`
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

const InputArea = () => (
  <BottomSection>
    <InputField>
      <input type="text"/>
    </InputField>
    <SubmitButton>⬆</SubmitButton>
  </BottomSection>
)

export default InputArea
