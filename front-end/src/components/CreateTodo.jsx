// CreateTodo.js
import React, { useState } from "react";
import axios from "axios";

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = () => {
    axios.post("http://localhost:3000/todo", {
      title: title,
      description: description
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(async function (res) {
        const json = await res.json();
        setTitle("");
        setDescription("");
        alert("Todo added");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
    
    setTodos(prevTodos => [...prevTodos, { title, description }]);
  };

  return (
    <div className="flex flex-col justify-center items-center">
    <div className="w-56 bg-stone-300">
      <input
        className="p-3 m-3"
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /> 
      <input
        className="p-3 m-3"
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex justify-center">
      <button className="p-3 m-3 bg-stone-950 text-white shadow-md" onClick={handleAddTodo}>
        Add a todo
      </button>
      </div>
    </div>
    </div>
  );
};

export default CreateTodo;
