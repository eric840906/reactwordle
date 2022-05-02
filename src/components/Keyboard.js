import PropTypes from 'prop-types'
import './Keyboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDeleteLeft,
  faArrowRightToBracket
} from '@fortawesome/free-solid-svg-icons'

const Keyboard = ({ handleClick }) => {
  const keys = ['qwertyuiop', 'asdfghjkl', '1zxcvbnm0']
  const keyElement = (item) => {
    if (item === '0') {
      return <FontAwesomeIcon icon={faDeleteLeft} />
    }
    if (item === '1') {
      return <FontAwesomeIcon icon={faArrowRightToBracket} />
    }
    return item
  }
  return (
    <div className='keyboard-frame'>
      {keys.map((item, i) => {
        return (
          <div className='keyboard-row' key={i}>
            {[...item].flat().map((item, i) => {
              return (
                <button
                  className='keyboard-block'
                  onClick={() => {
                    if (item === '0') return handleClick('Backspace')
                    if (item === '1') return handleClick('Enter')
                    return handleClick(item)
                  }}
                  key={i}>
                  {keyElement(item)}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

Keyboard.propTypes = {
  handleClick: PropTypes.func
}

export default Keyboard
