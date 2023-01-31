import { BsClipboardX } from 'react-icons/bs'

const EmptyTaskList = () => {
  return (
    <div className="h-[244px] w-full max-w-[736px] border-t rounded border-gray-400 flex justify-center items-center flex-col gap-4">
      <BsClipboardX
        size={56}
        className="text-gray-400"
      />
      <div className="flex flex-col">
        <span className="font-bold text-gray-300">
          Você ainda não tem tarefas cadastradas
        </span>
        <span className="text-gray-300">
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  )
}

export default EmptyTaskList
