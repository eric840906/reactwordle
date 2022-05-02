import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  const [history, setHistory] = useState([])
  // const [isCorret, setIsCorrect] = useState(false)
  const formatGuess = () => {
    const solutionArr = [...solution]
    const formattedGuess = [...currentGuess].map((key, i) => {
      let color = 'grey'
      if (key === solutionArr[i]) {
        color = '#227329'
        solutionArr[i] = null
        return { key, color }
      }
      if (solutionArr.includes(key)) {
        color = '#f2d851'
        solutionArr[i] = null
        return { key, color }
      }
      solutionArr[i] = null
      return { key, color }
    })
    console.log(formattedGuess)
    setHistory([...history, formattedGuess])

    // format the guess to [{key: 'a', color:"green"}, .....etc]
    console.log('guess submit')
    setTurn((turn) => turn + 1)
    setGuesses([...guesses, currentGuess])
    setCurrentGuess('')
  }
  // const addNewGuess = () => {}
  const wordHandler = (key) => {
    if (key === 'Enter') {
      if (turn > 5) {
        console.log('boom')
        return
      }
      if (guesses.some((guess) => guess === currentGuess)) {
        console.log('duplicate guess')
        return
      }
      if (currentGuess.length < 5) {
        console.log('your guess needs to be 5 characters long')
        return
      }
      formatGuess()
    }
    if (key === 'Backspace') {
      setCurrentGuess((prev) => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key)
      }
    }
  }
  const handleClick = (key) => {
    wordHandler(key)
  }
  const handleKeyup = ({ key }) => {
    wordHandler(key)
  }
  // return { turn, currentGuess, guesses, isCorret, handleKeyup }
  return { currentGuess, handleKeyup, history, handleClick }
}

export default useWordle
