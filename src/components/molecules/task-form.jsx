import { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../../contexts/task-context'
import Button from "../atoms/button"
import FormInput from '../atoms/forms/form-input'
import FormTextArea from '../atoms/forms/form-textarea'

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
            <FormInput
              handleOnChange={titleHandleOnChange}
              id='grid-title'
              labelTitle="Título de la tarea"
              value={taskTitle}
              placeholder='Preparar taza de café'
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <FormTextArea
              labelTitle='Descripción'
              value={taskDescription}
              handleOnChange={descriptionHandleOnChange}
              id='grid-description'
              placeholder='Preparar el agua y moler el café'
            />
          </div>
        </div>

        <Button type='submit' value="Guardar" handleOnClick={handleOnSubmit}></Button>

      </form>
    </div>
  )
}

export default TaskForm