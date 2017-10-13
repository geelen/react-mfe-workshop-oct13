import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import ChatApp from './components/ChatApp'
import { Provider } from 'react-redux'

import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ChatApp/>
  </Provider>,
  document.getElementById('root')
)
