const store = {
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
}

export default store

export const addMessageToStore = (message) => {
  store.messages.push(message)
}
