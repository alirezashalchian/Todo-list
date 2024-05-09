import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const toggleInput = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
      setIsOpen(false);
    }
    console.log(value);
  };

  return (
    <div>
      {!isOpen && <button onClick={toggleInput}>+ Add a Task</button>}

      {isOpen && (
        <form onSubmit={handleSubmit} className="TodoForm">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="todo-input"
            placeholder="What is the task today?"
          />
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </form>
      )}
    </div>
  );
};

export default AddTodoForm;
