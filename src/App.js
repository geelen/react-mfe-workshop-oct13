import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const AppHeader = ({ greeting }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">{ greeting }</h1>
  </header>
)

const obj = {
  id: 'Yes this is the object',
  foo() {
    console.log(this)
  }
}
obj.foo()
const fn = obj.foo
fn()

class App extends Component {
  constructor() {
    super()
    this.state = { greeting: "👻🕸 It's Friday 13th!" }
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick() {
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button type="button" onClick={this.handleButtonClick}>
            Click me!
          </button>
        </p>
      </div>
    )
  }
}

export default App
