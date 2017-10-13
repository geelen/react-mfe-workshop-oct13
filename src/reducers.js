// new_state = fn( old_state, action )

const MY_AVATAR = 'http://fillmurray.com/106/106'

export const addMessageReducer = (old_state, action) => {
  if (action.type === "ADD_MESSAGE") {

    const lastMessage = old_state.messages[old_state.messages.length - 1]

    if (lastMessage && lastMessage.avatar === MY_AVATAR) {

      return {
        ...old_state, // all the old_state we don't care about
        messages: [
          // all the messages before the last
          ...old_state.messages.slice(0, old_state.messages.length - 1),
          {
            ...lastMessage, // the same as lastMessage, except for
            lines: lastMessage.lines.concat(action.line)
          }
        ]
      }

    } else {

      return {
        ...old_state, // all the old_state we don't care about
        messages: [
          ...old_state.messages, // all the previous messages
          {                      // plus our new message
            avatar: MY_AVATAR,
            lines: [action.line]
          }
        ]
      }
    }
  }

  return old_state
}

