// componente para los botones. Recibe por parámetro color y text, que se han definido en la etiqueta <Button /> de Header.js. Por tanto el componente actúa como plantilla o esquema con unos parámetros que se inician en el lugar donde se aplican.

import PropTypes from 'prop-types'


const Button = function({color, text, onClick}) {
  return <button 
  style={{backgroundColor: color}} 
  className='btn'
  onClick={onClick}>

  {text}
  </button>
}



// control de propiedades para las variables que entran
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button