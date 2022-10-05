import Task from "./Task"

// el map() recorre todas las propiedades .text del iterable que está en App.js. La propiedad key es necesaria para identificar cada uno de los elementos

const Tasks = function ({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) => (<Task
        key={task.id}
        task={task}
        onDelete={onDelete}
        onToggle={onToggle} />))}
    </>
  )
}

export default Tasks