import './App.css'
import TaskForm from './components/molecules/task-form'
import TaskGrid from './components/molecules/task-grid'

function App() {

  return (
    <div className='container mx-auto'>
      <TaskForm />
      <hr className='mb-2 mt-2' />
      <TaskGrid />
    </div>
  )
}

export default App
