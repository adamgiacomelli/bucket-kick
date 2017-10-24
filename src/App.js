import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './images/logo.svg'
import './App.css'


class App extends Component {
  render () {
    const {counter} = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Counter:
          <span className={counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {counter.count} </span>
        </p>
        <p>
          <button onClick={() => counter.increment()}> + </button>
          <button onClick={() => counter.decrement()}> - </button>
        </p>
        <DevTools />
      </div>
    )
  }
}

export default observer(App)
