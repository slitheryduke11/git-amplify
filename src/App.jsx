import { useState } from 'react'
import loveBirds from './assets/love-birds.png'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const beautifulWords = [
    'Te amo en este y en todos los universos',
    'Eres mi niña hermosa',
    'Amo pasar tiempo a tu lado',
    'Eres mi mejor amiga',
    'Eres mi confidente',
    'Eres mi compañera de vida',
    'Me gustan tus meloncitos',
    'Amo verte sonreir',
    'Cada que veas esto recuerda que te amo',
    'Me encantas',
    'Eres la niña de mis ojos',
    'Gracias por retarme a besarte',
    'Quédate conmigo para siempre',
    'Haces mi vida más divertida',
    'Amo ir al cine contigo',
    'Eres la única con quien quiero ver videos de Dross',
    'Amo ver tus ojitos brillar',
    'Haces que mi pecho se sienta feliz',
    'Siempre seré tu compañero de aventuras',
    'Soy solo tuyo',
    'Sé siempre mía'
  ];
  const randomWord = beautifulWords[Math.floor(Math.random() * beautifulWords.length)];

  const [word, setWord] = useState(randomWord);


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
        {word}
      </p>
    </>
  )
}

export default App
