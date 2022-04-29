import { useEffect } from 'react'
import PropTypes from 'prop-types'
import useWordle from '../hooks/useWordle'

const Wordle = ({ solution }) => {
  const { handleKeyup, currentGuess } = useWordle(solution)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])
  return (
    <div>currentGuess - {currentGuess}</div>
  )
}

Wordle.propTypes = {
  solution: PropTypes.string
}

export default Wordle
