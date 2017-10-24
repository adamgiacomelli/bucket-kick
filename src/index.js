import React from 'react'
import ReactDOM from 'react-dom'
import { createRenderer } from 'fela'
import { Provider } from 'react-fela'
import Counter from './Counter'
import './index.css'
import App from './App'

const renderer = createRenderer()

ReactDOM.render(
  <Provider renderer={renderer}>
    <App counter={new Counter()} />
  </Provider>,
  document.getElementById('root')
)
