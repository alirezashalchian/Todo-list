import "../App.css";
import React, { useState } from "react";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div>
      <button onClick={() => toggleComplete(task.id)}>check</button>
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      {!isExpanded && <button onClick={toggleExpand}>expand</button>}
      {isExpanded && (
        <>
          <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};
