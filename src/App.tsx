import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Header from './components/Header'
import TaskList from './components/TaskList'

export interface TaskType {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  return (
    <main className=" h-screen w-full">
      <Header
        tasks={tasks}
        addTask={setTasks}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
      <ToastContainer autoClose={1500} />
    </main>
  )
}

export default App
