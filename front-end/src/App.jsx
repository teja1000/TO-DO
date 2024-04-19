// App.js
import React, { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch todos");
        }
        return res.json();
      })
      .then((json) => {
        setTodos(json.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <>
      <CreateTodo setTodos={setTodos} />
      <Todo todos={todos} />
    </>
  );
}

export default App;

