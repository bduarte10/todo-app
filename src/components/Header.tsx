import { AiOutlinePlusCircle } from 'react-icons/ai'
import { TaskType } from '../App'
import logo from '../assets/Logo.svg'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface HeaderProps {
  addTask: (task: TaskType[]) => void
  tasks: TaskType[]
}

const Header = ({ addTask, tasks }: HeaderProps) => {
  const [value, setValue] = useState('')

  function handleAddTask(e: FormEvent) {
    e.preventDefault()
    const newTask: TaskType = {
      id: crypto.randomUUID(),
      title: value,
      isCompleted: false,
    }
    if (newTask.title.trim() === '') {
      return toast.error('Nenhuma tarefa foi definida')
    } else {
      addTask([...tasks, newTask])
      setValue('')
      toast.success('Tarefa adicionada com sucesso')
    }
  }

  return (
    <header className="bg-gray-700 w-full h-[200px] flex-col text-gray-100 flex justify-center items-center mb-24 relative">
      <img
        src={logo}
        alt="logo"
        className="h-[48px] w-[126px] "
      />
      <form className="input-task max-w-[736px] w-full flex gap-2 absolute  px-3 lg:px-0">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="bg-gray-500 h-[54px] w-full placeholder:text-gray-300 pl-4 rounded-lg border border-gray-700 outline-none  focus:border-purple-dark"
          placeholder="Adicione uma nova tarefa"
        />

        <button
          onClick={handleAddTask}
          className="bg-blue-dark hover:bg-blue transition-colors text-sm font-bold px-4 py-4 flex rounded-lg items-center outline-none gap-2">
          Criar
          <AiOutlinePlusCircle size={16} />
        </button>
      </form>
    </header>
  )
}

export default Header
