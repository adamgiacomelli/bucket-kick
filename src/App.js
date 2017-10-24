import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import { createComponent as cc } from 'react-fela'
import bucket from './images/empty-bucket.png'
import './App.css'

const Button = cc(
  _ => ({
    color: 'white',
    border: '3px solid white',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '10px 30px',
    fontSize: '26px',
    fontWeight: '900',
    outline: 'none',
    cursor: 'pointer',
    background:
      'linear-gradient(to bottom, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(43,43,43,1) 76%,rgba(17,17,17,1) 90%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%)',
    ':hover': {
      border: '3px solid gray'
    }
  }),
  'button',
  ['onClick']
)

const CounterStyle = observer(({ counter }) => (
  <div
    style={{
      fontSize: '30px',
      marginLeft: `${counter.count * 10}px`,
      transition: 'margin-left .2s'
    }}
  >
    <p>
      Bucket kicked:
      <span> {counter.count} </span>
      times
    </p>
    <img
      className={counter.shake % 2 ? 'shake' : 'no-shake'}
      height={200}
      src={bucket}
      alt='bucket'
    />
  </div>
))

class App extends Component {
  render () {
    const { counter } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Welcome to Bucket Kick</h1>
        </header>
        <CounterStyle counter={counter} />
        <p>
          <Button onClick={() => counter.increment()}> Kick it! </Button>
          <Button onClick={() => counter.decrement()}> UnKickIt! </Button>
        </p>
        <DevTools />
      </div>
    )
  }
}

export default App
