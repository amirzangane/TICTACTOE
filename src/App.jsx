import { useState } from 'react'
import './App.css'
import Tictoctoe from './pages/TICTACTOE/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Tictoctoe />
    </>
  )
}

export default App
