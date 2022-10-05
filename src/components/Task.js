// importando iconos como componentes. Se han instalado con el comando: npm i react-icons
import {FaTimes} from 'react-icons/fa'
import {FaClock} from 'react-icons/fa'
import {FaMap} from 'react-icons/fa'

const Task = function({task, onDelete, onToggle}) {
  // al hacer click en el componente del icono, llevará a la función onDelete de App.js pasándole además el id de la tarea
  return (
    // el classname será siempre task + también reminder si su estado es true (equivale a: {`task reminder`})
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
        <h3>
        {task.text} 
        <FaTimes 
        style={{ color:'red', cursor:'pointer' }} 
        onClick={()=>onDelete(task.id)} />
        </h3>
        <p><FaClock/> {task.day}</p>
        <p><FaMap/> {task.place}</p>
    </div>
  )
}

export default Task