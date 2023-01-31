import { useState } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'

export interface TaskType {
  id: string
  title: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: '1', title: 'Estudar React', isCompleted: false },
  ])

  return (
    <main className="bg-gray-600 h-screen w-full">
      <Header
        tasks={tasks}
        addTask={setTasks}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </main>
  )
}

export default App
