import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [isEditing, setIsEditing] = useState(task.isEditing || false);
  const [value, setValue] = useState("");

  const toggleInput = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      {!isEditing && <button onClick={toggleInput}>Edit</button>}

      {isEditing && (
        <form onSubmit={handleSubmit} className="TodoForm">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="todo-input"
            placeholder="What is the task today?"
          />
          <button type="submit" className="todo-btn">
            Update your task
          </button>
        </form>
      )}
    </div>
  );
};

export default EditTodoForm;
