//import CrossIcon from "./components/icons/CrossIcon"
//import MoonIcon from "./components/icons/MoonIcon"
import Header from "./components/Header"
import TodoCreate from "./components/TodoCreate"
import TodoList from "./components/TodoList"
import TodoComputed from "./components/TodoComputed"
import TodoFilter from "./components/TodoFilter"
import { useState } from "react"


const initialStateTodos = [
  
  {id: 1, title: "Complete online JavaScript",completed: true},
  {id: 2, title: "Go to the gym",completed: false},
  {id: 3, title: "Go to the Voley",completed: false},
    
    ]

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos)

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos,newTodo])
  }

  const removeTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo))
  }

  const countTodo = todos.filter(todo => !todo.completed).length

  const clearCompleted = () => {
      setTodos(todos.filter(todo => !todo.completed))
  }

  const [filter, setFilter] = useState("all")

  const changeFilter = filter => setFilter(filter)

  const filterTodos = () =>{
    switch (filter) {
      case "all":
          return todos
      case "active":
          return todos.filter(todo => !todo.completed)
      case "completed":
          return todos.filter(todo => todo.completed)
      default:
        return todos
    }

  }

  return (
    <>
    
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] 
        dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
         bg-contain  bg-no-repeat bg-gray-300 min-h-screen  dark:bg-gray-900">
          
          <Header/>
          <main className="container mx-auto px-4 mt-8 ">

            <TodoCreate  createTodo={createTodo}/>
            <TodoList todos={filterTodos()} removeTodo={removeTodo} updateTodo={updateTodo}/>
            <TodoComputed countTodo={countTodo} clearCompleted={clearCompleted}/>
            <TodoFilter changeFilter={changeFilter} filter={filter} />
            
          </main>

          

          <footer className="text-center mt-8  dark:text-gray-400">Drag and Drop to reorder list</footer>

        </div>
          
    </>
  )
}

export default App