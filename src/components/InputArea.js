import React from 'react'
import styled from 'styled-components'

const BottomSection = styled.div`
  background: moccasin;
  height: 4rem;
`
const InputField = 'div'
const SubmitButton = 'div'

const InputArea = () => (
  <BottomSection>
    <InputField>
      <input type="text"/>
    </InputField>
    <SubmitButton>
      <button>⬆</button>
    </SubmitButton>
  </BottomSection>
)

export default InputArea
