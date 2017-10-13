import React from 'react'

const MessageEntry = 'div'
const Avatar = 'div'
const Lines = 'div'
const FillScreen = 'div'
const ChatWindow = 'div'
const InputArea = 'div'
const InputField = 'div'
const SubmitButton = 'div'

const Message = () => (
  <MessageEntry>
    <Avatar/>
    <Lines>
      <div>Line one</div>
      <div>Line two</div>
      <div>Line three</div>
    </Lines>
  </MessageEntry>
)

const ChatApp = () => (
  <FillScreen>
    <ChatWindow>
      <Message/>
      <Message/>
      <Message/>
    </ChatWindow>
    <InputArea>
      <InputField/>
      <SubmitButton/>
    </InputArea>
  </FillScreen>
)

export default ChatApp
