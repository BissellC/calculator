import React, { useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

const App = () => {
  const [display, setDisplay] = useState([])
  const [problem, setProblem] = useState('')
  const [answer, setAnswer] = useState('')

  const receiveInputs = x => {
    if (answer === '') {
      setDisplay([...display, x])
    }
  }

  const clearDisplay = () => {
    setDisplay([])
  }

  const solveProblem = input => {
    let problem = input.join('')
    setProblem(problem)
    console.log(problem)
    let answer = new Function('return ' + problem)()
    //let answer = eval(problem)
    setAnswer(answer)
    console.log(answer)
    setDisplay([answer])
    setAnswer('')
  }

  return (
    <main>
      <KeyboardEventHandler
        handleKeys={['numeric']}
        onKeyEvent={(key, e) => receiveInputs(key)}
      />
      <section className="display" onKeyDown={() => receiveInputs()}>
        {display}
      </section>
      <section className="row-1">
        <div className="clear" onClick={() => clearDisplay()}>
          CLEAR
        </div>
        <div className="0" onClick={() => receiveInputs(0)}>
          0
        </div>
        <div className="equals" onClick={() => solveProblem(display)}>
          =
        </div>
        <div className="divide" onClick={() => receiveInputs('/')}>
          /
        </div>
      </section>
      <section className="row-2">
        <div className="7" onClick={() => receiveInputs(7)}>
          7
        </div>
        <div className="8" onClick={() => receiveInputs(8)}>
          8
        </div>
        <div className="9" onClick={() => receiveInputs(9)}>
          9
        </div>
        <div className="subtract" onClick={() => receiveInputs('-')}>
          -
        </div>
      </section>
      <section className="row-3">
        <div className="4" onClick={() => receiveInputs(4)}>
          4
        </div>
        <div className="5" onClick={() => receiveInputs(5)}>
          5
        </div>
        <div className="6" onClick={() => receiveInputs(6)}>
          6
        </div>
        <div className="add" onClick={() => receiveInputs('+')}>
          +
        </div>
      </section>
      <section className="row-4">
        <div className="1" onClick={() => receiveInputs(1)}>
          1
        </div>
        <div className="2" onClick={() => receiveInputs(2)}>
          2
        </div>
        <div className="3" onClick={() => receiveInputs(3)}>
          3
        </div>
        <div className="multiply" onClick={() => receiveInputs('*')}>
          x
        </div>
      </section>
    </main>
  )
}

export default App
