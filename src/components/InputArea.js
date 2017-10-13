import React from 'react'

const BottomSection = 'div'
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
