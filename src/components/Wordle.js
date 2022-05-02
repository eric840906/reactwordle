import { useEffect } from 'react'
import PropTypes from 'prop-types'
import useWordle from '../hooks/useWordle'
import Keyboard from './Keyboard'
import './Wordle.css'

const Wordle = ({ solution }) => {
  const { handleKeyup, currentGuess, history } = useWordle(solution)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])
  return (
    <>
      <div className='wordle-frame'>
        {history.map((item, index) => {
          return (
            <div className='wordle-row' key={index}>
              {item.map((item, index) => {
                const style = {
                  backgroundColor: item.color,
                  color: 'white'
                }
                return (
                  <span className='wordle-block' key={index} style={style}>
                    {item.key}
                  </span>
                )
              })}
            </div>
          )
        })}
        <div className='wordle-row'>
          {[...currentGuess].map((item, i) => (
            <span className='wordle-block' key={i}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <Keyboard />
    </>
  )
}

Wordle.propTypes = {
  solution: PropTypes.string
}

export default Wordle
