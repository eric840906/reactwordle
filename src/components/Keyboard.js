import './Keyboard.css'
const Keyboard = () => {
  const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return (
    <div className='keyboard-frame'>
      {keys.map((item, i) => {
        let isLastRow = false
        if (i + 1 === keys.length) {
          console.log(item)
          isLastRow = true
        }
        return (
          <div className='keyboard-row' key={i}>
            {[...item].flat().map((item, i) => {
              if (isLastRow) {
                return (
                  <button
                    className='keyboard-block'
                    onClick={() => console.log(item)}
                    key={i}>
                    {item}
                  </button>
                )
              }
              return (
                <button
                  className='keyboard-block'
                  onClick={() => console.log(item)}
                  key={i}>
                  {item}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Keyboard
