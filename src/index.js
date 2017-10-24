import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter';
import './index.css'
import App from './App'

ReactDOM.render(<App counter={new Counter()} />, document.getElementById('root'))
