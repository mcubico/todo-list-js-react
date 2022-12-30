import { createContext, useState } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(data)

  function saveTask(taskData) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: taskData.title,
      description: taskData.description,
      done: false
    }])
    console.log('Tarea registrada');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
    console.log('Tarea ' + id + ' eliminada');
  }

  function setTaskDone(id) {
    const taskToUpdate = tasks.find(task => task.id === id)
    taskToUpdate.done = true

    setTasks([...tasks.filter(task => task.id !== id), taskToUpdate])

    console.log('Tarea ' + id + ' marcada como realizada');
  }

  return (
    <TaskContext.Provider
      value={
        {
          tasks,
          saveTask,
          deleteTask,
          setTaskDone
        }
      }>
      {props.children}
    </TaskContext.Provider>
  )
}