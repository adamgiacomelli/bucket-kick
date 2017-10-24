import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools';
import logo from './images/logo.svg'
import './App.css'

const Button = ({children, btnClick}) =>
<button style={{
  color: "white",
  border: "3px solid white",
  borderRadius: "12px",
  textAlign: "center",
  padding: "10px 30px",
  fontSize:"26px",
  fontWeight: "900",
  outline: "none",
  cursor: "pointer",
  background: "linear-gradient(to bottom, rgba(76,76,76,1) 0%,rgba(89,89,89,1) 12%,rgba(102,102,102,1) 25%,rgba(71,71,71,1) 39%,rgba(43,43,43,1) 76%,rgba(17,17,17,1) 90%,rgba(28,28,28,1) 91%,rgba(19,19,19,1) 100%)"
}
} onClick={btnClick}>{children}</button>

const CounterStyle = observer(({counter}) => 
<p
style={{
    fontSize: "50px"
  }}>
Bucket kicked:
  <span> {counter.count} </span>
  times
</p>
)

class App extends Component {
  render () {
    const {counter} = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Bucket Kick</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <CounterStyle counter={counter}/>
        <p>
          <Button btnClick={() => counter.increment()}> Kick it! </Button>
          <Button btnClick={() => counter.decrement()}> UnKickIt! </Button>
        </p>
        <DevTools />
      </div>
    )
  }
}

export default App
