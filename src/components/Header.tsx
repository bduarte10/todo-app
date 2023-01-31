import { AiOutlinePlusCircle } from 'react-icons/ai'
import { TaskType } from '../App'
import logo from '../assets/Logo.svg'
import { useState } from 'react'

interface HeaderProps {
  addTask: (task: TaskType[]) => void
  tasks: TaskType[]
}

const Header = ({ addTask, tasks }: HeaderProps) => {
  const [value, setValue] = useState('')

  function handleAddTask() {
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title: value,
      isCompleted: false,
    }

    addTask([...tasks, newTask])
    setValue('')
  }

  return (
    <header className="bg-gray-700 w-full h-[200px] flex-col text-gray-100 flex justify-center items-center mb-24 relative">
      <img
        src={logo}
        alt="logo"
        className="h-[48px] w-[126px] "
      />
      <div className="input-task max-w-[736px] w-full flex gap-2 absolute">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-500 h-[54px] w-full placeholder:text-gray-300 pl-4 rounded-lg border border-gray-700"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-dark text-sm font-bold px-4 py-4 flex rounded-lg items-center gap-2">
          Criar
          <AiOutlinePlusCircle size={16} />
        </button>
      </div>
    </header>
  )
}

export default Header
