import store from './store'

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
