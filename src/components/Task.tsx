import { TbTrash } from 'react-icons/tb'
import { AiOutlineCheck } from 'react-icons/ai'

interface TaskProps {
  title: string
  isCompleted: boolean
  handleIsComplete: () => void
  handleDeleteTask: () => void
}

const Task = ({
  title,
  handleIsComplete,
  isCompleted,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <div className="max-w-[736px] w-full bg-gray-500 m-auto border border-gray-400 rounded-lg flex items-center  px-4 py-4 mb-3">
      <button
        onClick={handleIsComplete}
        className="w-4 h-4 border border-blue rounded-full flex items-center justify-center mr-4">
        {isCompleted ? (
          <span className="w-4 h-4 bg-purple-dark rounded-full  flex items-center justify-center">
            <AiOutlineCheck
              className="text-gray-100"
              size={8}
            />
          </span>
        ) : (
          ''
        )}
      </button>
      <span
        className={
          isCompleted
            ? `text-sm text-gray-300 line-through`
            : `text-sm text-gray-100`
        }>
        {title}
      </span>
      <div className="group hover:bg-gray-400 rounded w-6 h-6 flex justify-center items-center ml-auto cursor-pointer">
        <TbTrash
          onClick={handleDeleteTask}
          className="group-hover:text-danger  text-gray-300 "
        />
      </div>
    </div>
  )
}

export default Task
