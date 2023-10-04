import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0)
  const [numberTwo, setNumberTwo] = useState(0)
  const [result, setResult] = useState(0)

  function calc() {
    if (isNaN(Number(numberOne)) || isNaN(Number(numberTwo))){
      alert("Digite um numero")
      return
    }
   setResult(Number(numberOne) + Number(numberTwo))
  }

  return (
    <div className="container">
      <div className="calc">
        <div className='main'>
          <input type="text" placeholder='Type number' onChange={(event) => {
            setNumberOne(event.currentTarget.value)
            }}/>
          <p className='plus'>+</p>
          <input type="text"  placeholder='Type number' onChange={(event) => {
            setNumberTwo(event.currentTarget.value)
          }}/>
        </div>
        <button onClick={() => calc()}>Calcular</button>
       </div>
      <div className='result'>
        <h1>O RESULTADO É</h1>
          <span>
            {result}
          </span>
      </div>
    </div>
  )
}

export default App
