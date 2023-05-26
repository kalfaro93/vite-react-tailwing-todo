import {  Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem"



const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <>
      <Droppable droppableId="todos">
        
        {
           (droppableProvider) => (
              <div ref={droppableProvider.innerRef} {...droppableProvider.droppableProps}
              className="bg-white overflow-hidden  rounded-t-md  [&>article]:p-4 mt-8 transition-all duration-1000 dark:bg-gray-800">
            
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} index={index} draggableId={`${todo.id}`} >
                    {
                      (draggableProvider) =>(
                              <TodoItem 
                              todo={todo} 
                              removeTodo={removeTodo} 
                              updateTodo={updateTodo}
                              ref={draggableProvider.innerRef}
                              {...draggableProvider.draggableProps}
                              {...draggableProvider.dragHandleProps}/> 
                            )
                    }
                  
                  </Draggable>
                  
                ))}
                 {droppableProvider.placeholder}
            
              </div>
           )
        }
        
      </Droppable>
    
    </>
  )
}

export default TodoList  