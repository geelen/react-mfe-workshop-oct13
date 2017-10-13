import { observable } from 'mobx'

const store = observable({
  messages: [
    {
      avatar: 'http://fillmurray.com/96/96',
      lines: ['Line one', 'Line two', 'Line three',]
    },
    {
      avatar: 'http://fillmurray.com/98/98',
      lines: ['Line four', 'Line five', 'Line six',]
    },
    {
      avatar: 'http://fillmurray.com/104/104',
      lines: ['Line seven', 'Line eight', 'Line nine',]
    },
  ]
})

export default store

const MY_AVATAR = 'http://fillmurray.com/106/106'

export const addMessageToStore = (line) => {
  const lastMessage = store.messages[store.messages.length - 1]

  if (lastMessage && lastMessage.avatar === MY_AVATAR) {
    lastMessage.lines.push(line)
  } else {
    store.messages.push({
      avatar: MY_AVATAR,
      lines: [line]
    })
  }
}
