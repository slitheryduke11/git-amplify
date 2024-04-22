import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Mi Meli</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Te amo n + {count}
        </button>
      </div>
      <p className="read-the-docs">
        En este y en todos los universos.
      </p>
    </>
  )
}

export default App
