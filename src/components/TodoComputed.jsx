

const TodoComputed = ({countTodo, clearCompleted}) => {
  return (
    <>
    <section className="flex justify-between rounded-b-md py-4 px-4 bg-white  dark:bg-gray-800 ">
        <span className="text-gray-400 ">{countTodo} item left</span>
        <button className="text-gray-400 "
        onClick={clearCompleted}>Clear Completed</button>
    </section>
</>
  )
}

export default TodoComputed