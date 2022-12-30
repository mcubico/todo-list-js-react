import { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../contexts/task-context'

function TaskForm() {

  const { saveTask } = useContext(TaskContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  function titleHandleOnChange(e) {
    setTaskTitle(e.target.value)
  }

  function descriptionHandleOnChange(e) {
    setTaskDescription(e.target.value)
  }

  function handleOnSubmit(e) {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription
    }

    saveTask(newTask)
    clearTask()
  }

  function clearTask() {
    setTaskTitle('')
    setTaskDescription('')
  }

  return (
    <div className='max-w-md mx-auto pt-5'>
      <form onSubmit={handleOnSubmit} className="w-full max-w-lg">

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-title">
              Título de la tarea
            </label>
            <input
              onChange={titleHandleOnChange}
              value={taskTitle}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title"
              type="text"
              placeholder="Preparar taza de café" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
              Descripción
            </label>
            <textarea
              value={taskDescription}
              onChange={descriptionHandleOnChange}
              id="grid-description"
              cols="30"
              rows="5"
              placeholder="Preparar el agua y moler el café"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
          </div>
        </div>

        <button
          type='submit'
          className="bg-green-200 rounded-full px-3 py-1 font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-300"
          onClick={handleOnSubmit}>
          Guardar
        </button>

      </form>
    </div>
  )
}

export default TaskForm