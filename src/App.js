// ruta principal de la  app
// los componentes se importan y se integran como una etiqueta de html (en este caso <Header/>). Se pueden pasar variables como atributos de esa etiqueta
// useEffect = coje los datos del backend
import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"

const App = function () {

  const [showAddTask, setShowAddTask] = useState(false)
  // useState() = datos por defecto, setTasks = función para actualizar el estado
  // en una aplicación grande, los datos vendrían de otra parte
  const [tasks, setTasks] = useState([])

  useEffect(function () {
    const getTasks = async function () {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()

  }, [])

  // Fetch tasks
  const fetchTasks = async function () {
    const res = await fetch('https://my-json-server.typicode.com/jperellolopez/json-server/tasks')
    const data = await res.json()
    return data

  }

  // Fetch single task
  const fetchTask = async function (id) {
    const res = await fetch(`https://my-json-server.typicode.com/jperellolopez/json-server/tasks/${id}`)
    const data = await res.json()
    return data

  }

  // Función para borrar una tarea, se le pasa como una prop del componente Tasks
  const deleteTask = async function (id) {

    // Primero borra la tarea de la fuente de datos (json)
    await fetch(`https://my-json-server.typicode.com/jperellolopez/json-server/tasks/${id}`, { method: 'DELETE' })

    // Después borra la tarea de la interfaz
    // para cada tarea, si el id es diferente del id que se le pasa (clickeado) se borra
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Función para activar o desactivar reminder (borde coloreado) con un doble clicks
  const toggleReminder = async function (id) {

    // cambios a nivel de datos
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`https://my-json-server.typicode.com/jperellolopez/json-server/tasks/{id}`, { method: 'PUT', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(updatedTask)
  })

  const data = await res.json()

    // cambios a nivel de interfaz
    // mapea los elementos task, si el id de un task es = al que se le ha pasado, deja todo igual (spread) cambiando el valor asociado a la clave reminder, si no es igual no cambia nada
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  // Función para añadir una nueva tarea. 
  const addTask = async function (task) {

    const res = await fetch(`https://my-json-server.typicode.com/jperellolopez/json-server/tasks`, {
      method: 'POST', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])

  }

  // el componente Tasks recibe como valor por defecto tasks, que representa el array de objetos
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask ? <AddTask onAdd={addTask} /> : ''}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No hay tareas pendientes')}
    </div>
  )
}

/*
Añadimos función en App.js
La asignamos como propiedad en el return (onDelete, onToggle, etc)
En tasks.js añadimos la nueva propiedad
En task.js se añade la propiedad con su acción (onClick, onDoubleClick, etc)
*/

export default App;
