import { useState } from 'react'

const useWordle = (solution) => {
  // const [turn, setTurn] = useState(0)
  // const [guesses, setGuesses] = useState([])
  const [currentGuess, setCurrentGuess] = useState('')
  // const [history, setHistory] = useState([])
  // const [isCorret, setIsCorrect] = useState(false)
  // const formatGuess = () => {}
  // const addNewGuess = () => {}
  const handleKeyup = ({ key }) => {
    if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1))
      return
    }
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key)
      }
    }
  }
  // return { turn, currentGuess, guesses, isCorret, handleKeyup }
  return { currentGuess, handleKeyup }
}

export default useWordle
