import { useContext } from "react"
import { TaskContext } from "../../contexts/task-context"
import Button from "../atoms/button"

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
        <Button value="Realizada" handleOnClick={() => setTaskDone(task.id)}></Button>
        <Button value="Eliminar" handleOnClick={showDeleteWarning} color="red"></Button>
      </div>
    </div>
  )
}

export default TaskCard