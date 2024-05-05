import React, { useState, useEffect } from "react";
import AddButton from "./AddButton";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="TaskContainer">
      <AddButton addTodo={addTodo} />
    </div>
  );
};
