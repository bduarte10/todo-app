import { TaskType } from '../App'
import Task from './Task'

interface TaskListProps {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>
}

const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const completedTasks = tasks.filter((task) => task.isCompleted).length

  const deleteTask = (id: string) => {
    const tasksWithoutDeleted = tasks.filter((item) => item.id !== id)
    setTasks(tasksWithoutDeleted)
  }

  return (
    <>
      <div className=" max-w-[736px] w-full m-auto mb-6">
        <div className="flex justify-between ">
          <span className="text-blue font-bold text-sm flex gap-2 ">
            Tarefas criadas
            <span className="bg-gray-400 text-gray-200 px-2 rounded-full">
              {tasks.length}
            </span>
          </span>
          <span className="text-purple font-bold text-sm flex gap-2">
            Concluídas
            <span className="bg-gray-400 text-gray-200 px-2 rounded-full ">
              {`${completedTasks}
               de ${tasks.length}`}
            </span>
          </span>
        </div>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          handleIsComplete={() => {
            const newTasks = tasks.map((item) =>
              item.id === task.id
                ? { ...item, isCompleted: !item.isCompleted }
                : item
            )
            setTasks(newTasks)
          }}
          isCompleted={task.isCompleted}
          handleDeleteTask={() => deleteTask(task.id)}
        />
      ))}
    </>
  )
}

export default TaskList
