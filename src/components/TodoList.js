import React from 'react'
import Todo from './Todo'

const todos = [
    {"description" : "Einkaufen", "done": true },
    {"description" : "Programmieren", "done": false },
    {"description" : "Sport", "done": false }
];

const TodoList = () => {
  return (
    <div>
        <h1>Unsere Todos</h1>
        {todos.map((item, index) => {
            return (
              <Todo 
                description= {item.description} 
                done= {item.done} 
                key = {index}
              ></Todo>
            );
        })}
    </div>
  )
}

export default TodoList