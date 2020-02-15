import React, { memo } from 'react'

import logo from './logo.svg'
import './app.css'

import { CountProvider } from '../count-context/count-context'
import { CountDisplay } from '../count-display/count-display'
import { CounterControls } from '../counter/counter'

export default memo(function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <CountProvider>
          <CountDisplay />
          <CounterControls />
          <div>WAT</div>
        </CountProvider>
          <div>THE FUCK</div>
      </body>
    </div>
  )
})
