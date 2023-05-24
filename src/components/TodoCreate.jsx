import { useState } from "react"

const TodoCreate = ({createTodo}) => {

  const [title, setTitle] = useState("")

const handleSubmit = (e) => {
   e.preventDefault()
   
   if(!title.trim()){
    return setTitle("")
   }

   createTodo(title)
   setTitle("")

   
}

  return (
    <>
     <form 
     className="bg-white rounded-md overflow-hidden flex py-4 gap-4 items-center px-4  dark:bg-gray-800  "
     onSubmit={handleSubmit}>
        <span className="rounded-full border-2 inline-block h-5 w-5 f"></span>
        <input 
        type="text" 
        placeholder="Create a new todo..."  
        className="w-full text-gray-400 outline-none  dark:bg-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
     </form>
    </>
  )
}

export default TodoCreate