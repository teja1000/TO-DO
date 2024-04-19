import React from "react";
import { useState } from "react";

const Todo = ({ todos }) => {

const [com,setcomp]=useState(false)

const handleclick=()=>{
  setcomp(!com)
}
  return (
    <div className="flex flex-row justify-center items-center mt-4 p-2">
      {todos.map((todo, index) => (
        <div key={index}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={handleclick}>{todo.completed ? "completed" : "mark as complete"}</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;





