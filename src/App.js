import React, { Component } from 'react'
import './App.css'

import AppHeader from './AppHeader'

const AppIntro = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
)

const ExclamationMarkAdderButton = ({ onClick, ...props }) => (
  <p>
    Add exclamation marks to the header:
    <button type="button" onClick={onClick} {...props}>
      Click me!
    </button>
  </p>
)

class App extends Component {
  state = { greeting: "👻🕸 It's Friday 13th!" }

  handleButtonClick = () => {
    if (!this.state.greeting.endsWith('!!!!!!!')) {
      this.setState({
        greeting: this.state.greeting + '!'
      })
    } else {
      this.setState({
        greeting: "👻🕸 It's Friday 13th!"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader greeting={this.state.greeting}/>
        <AppIntro/>
        <ExclamationMarkAdderButton keyindex="-1"
                                    onClick={this.handleButtonClick}/>
      </div>
    )
  }
}

export default App
