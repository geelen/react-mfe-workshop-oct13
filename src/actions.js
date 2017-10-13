import store from './store'
import { addMessageReducer } from './reducers'

export const addMessageToStore = (line) => {
  store.messages = addMessageReducer(store, {
    type: 'ADD_MESSAGE',
    line
  }).messages
}
