import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { addMessageReducer } from './reducers'

const INITIAL_STATE = {
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

export default () => {
  return createStore(
    addMessageReducer,
    INITIAL_STATE,
    applyMiddleware(
      logger,
      thunk
    )
  )
}
