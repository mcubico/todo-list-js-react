import { useContext } from 'react'
import { TaskContext } from '../../contexts/task-context'
import TaskCard from './task-card'

function TaskGrid() {

  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0)
    return <h1 className='text-4xl font-bold'>No existen tareas registradas</h1>

  const taskToDo = tasks.filter(task => !task.done)
  if (taskToDo.length === 0)
    return <h1 className='text-4xl font-bold'>Todas las tareas han sido realizadas</h1>

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
        {
          tasks.map(task => {
            if (!task.done) {
              return <TaskCard key={task.id} task={task} />
            }
          })
        }
      </div>

      <hr className='mb-2 mt-2' />
      <h2 className='font-bold'>Total tareas: {tasks.length} | Tareas por realizar {taskToDo.length}</h2>
    </>
  )
}

export default TaskGrid