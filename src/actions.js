import store from './store'

const MY_AVATAR = 'http://fillmurray.com/106/106'
export const addMessageToStore = async (line) => {
  const lastMessage = store.messages[store.messages.length - 1]

  store.isSyncing = true
  await fetch('/api/new_message', { body: line })

  if (lastMessage && lastMessage.avatar === MY_AVATAR) {
    lastMessage.lines.push(line)
  } else {
    store.messages.push({
      avatar: MY_AVATAR,
      lines: [line]
    })
  }

  store.isSyncing = false
}
