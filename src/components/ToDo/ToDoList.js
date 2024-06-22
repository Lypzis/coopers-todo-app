import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
