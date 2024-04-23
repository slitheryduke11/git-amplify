import { useState } from 'react'
import loveBirds from './assets/love-birds.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div>
        <a target="_blank" title="love icons">
          <img src={loveBirds} className="logo" alt="Love birds image" />
        </a>
      </div>
      <h1>Mi Meli 💝</h1>
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
