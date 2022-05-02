import './Keyboard.css'
const Keyboard = () => {
  const keys = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return (
    <div className='keyboard-frame'>
      {keys.map((item, i) => {
        if (i + 1 === keys.length) {
          console.log(item)
        }
        return (
          <div className='keyboard-row' key={i}>
            {[...item].flat().map((item, i) => {
              return (
                <button className='keyboard-block' key={i}>
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
