import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

function a() {
  return 5
}

const b = function () {
  return 5
}
const c = () => {
  console.log("hi!")
  return 5
}
const d = () => 5

console.log(a())
console.log(b())
console.log(c())
console.log(d())

const AppHeader = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo"/>
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
