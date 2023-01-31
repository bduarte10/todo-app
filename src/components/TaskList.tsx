import Task from './Task'

const TaskList = () => {
  return (
    <>
      <div className=" max-w-[736px] w-full m-auto mb-6">
        <div className="flex justify-between ">
          <span className="text-blue font-bold text-sm flex gap-2 ">
            Tarefas criadas{' '}
            <span className="bg-gray-400 text-gray-200 px-2 rounded-full">
              5
            </span>
          </span>
          <span className="text-purple font-bold text-sm flex gap-2">
            Concluídas
            <span className="bg-gray-400 text-gray-200 px-2 rounded-full ">
              2 de 5
            </span>
          </span>
        </div>
      </div>
      <Task />
    </>
  )
}

export default TaskList
