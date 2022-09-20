import React from 'react'

const Todo = ({description, done}) => {
  return (
    <div>
       <h1>{description}</h1> 
       <h1>{done ? "Erledigt": "Noch zu erledigen"}</h1> 
    </div>
  )
}

export default Todo

// Test