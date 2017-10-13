export const addMessage = (message) => async dispatch => {
  dispatch({ type: 'SERVER_SYNCING' })

  await fetch(`/api/new_message?message=${message}`)

  dispatch({ type: 'ADD_MESSAGE', line: message })
  dispatch({ type: 'SERVER_SYNCED' })
}
