import { useContext } from "react"
import { TaskContext } from "../contexts/task-context"

function TaskCard({ task }) {

  const { setTaskDone, deleteTask } = useContext(TaskContext)

  function showDeleteWarning() {
    if (confirm('Estas a punto de eliminar una tarea, ¿deseas continuar?'))
      deleteTask(task.id)
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{task.title}</div>
        <p className="text-gray-700 text-base">{task.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-300"
          onClick={() => setTaskDone(task.id)}>Realizada</button>
        <button
          className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-red-300"
          onClick={showDeleteWarning}>Eliminar</button>
      </div>
    </div>
  )
}

export default TaskCard