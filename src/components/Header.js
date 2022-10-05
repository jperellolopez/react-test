import PropTypes from 'prop-types'
import Button from './Button'
// los elementos de la app se pueden dividir en componentes. Este es el componente del header
// rafce + enter
// crear componente, y desde app.js importarlo

// title representa una propiedad que se le pasará desde el objeto Header.defaultProps
const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text={showAdd ? 'Ocultar' : 'Añadir'} color={showAdd ? 'blue' : 'green'} onClick={onAdd}/>
    </header>
  )
}

// define las propiedades que se pasan a la función de arriba
Header.defaultProps = {
  title:'Seguimiento de tareas'
}

// define el tipo que tendrá que tener la propiedad title (primera p en lowercase!!)
Header.propTypes = {
    title: PropTypes.string.isRequired
}


/* CSS de ejemplo. Para aplicarlo, poner una propiedad style={headerStyle} al h1
const headerStyle = { 
    color:'red'
}
*/

export default Header