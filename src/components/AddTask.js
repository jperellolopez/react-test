// componente para el formulario de añadir tarea

import {useState} from 'react'

const AddTask = function({onAdd}) {

    // para cada campo hay una función set, con un estado por defecto ('')
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [place, setPlace] = useState('')
    const [reminder, setReminder] = useState(false)

    // función para validar, enviar y formatear el formulario
    const onSubmit = function(e) {
        e.preventDefault() 

        if(!text) {
            alert('Por favor, introduzca texto')
            return
        }

        // añade los campos enviados usando la función addTask de App.js
        onAdd({text, day, place, reminder})

        // una vez enviado, pone los campos en blanco
        setText('')
        setDay('')
        setPlace('')
        setReminder(false)
    }

    // las funciones onchange capturan el valor de lo que haya escrito en el campo en ese momento, cambiando el estado
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Tarea</label>
            <input type="text" placeholder="Añadir tarea" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Fecha y hora</label>
            <input type="text" placeholder="Añadir fecha y hora" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
                <div className="form-control">
            <label>Dirección</label>
            <input type="text" placeholder="Añadir dirección" value={place} onChange={(e) => setPlace(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Añadir Recordatorio</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Guardar tarea" className="btn btn-block" />
    </form>
  )
}

export default AddTask