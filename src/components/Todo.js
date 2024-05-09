import "../App.css";
import { useContext } from "react";
import { TodoContainerContext } from "./TodoContainer";

export const Todo = ({
  task,
  toggleComplete,
  toggleExpand,
  deleteTodo,
  editTodo,
}) => {
  const { isExpanded } = useContext(TodoContainerContext);
  return (
    <div>
      <button onClick={() => toggleComplete(task.id)}>check</button>
      <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      <button
        className={`${isExpanded ? "expanded" : ""}`}
        onClick={() => toggleExpand(task.id)}
      >
        expand
      </button>
      {isExpanded && (
        <>
          <button onClick={() => deleteTodo(task.id)}>Delete</button>
          <button onClick={() => editTodo(task.id)}>Edit</button>
        </>
      )}
    </div>
  );
};
