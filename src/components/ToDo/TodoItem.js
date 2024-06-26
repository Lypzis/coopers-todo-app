import React from "react";
import API from "../../services/api";

const TodoItem = ({ item, fetchTodos }) => {
  const handleToggleDone = async () => {
    try {
      await API.put(`/todos/${item._id}`, {
        done: !item.done,
      });
      fetchTodos(); // Refresh the list after updating the item
    } catch (error) {
      console.error("Failed to update todo status", error);
    }
  };

  const handleDelete = async () => {
    try {
      await API.delete(`/todos/${item._id}`);
      fetchTodos(); // Refresh the list after deleting the item
    } catch (error) {
      console.error("Failed to delete todo", error);
    }
  };

  return (
    <li className='todo-box__list-item'>
      <button
        className={`check-button ${item.done ? "checked" : ""}`}
        onClick={handleToggleDone}
      >
        <span className='circle'></span>
      </button>
      <p className='paragraph-secondary'>{item.description}</p>
      <button
        className='btn btn__todo btn__todo--delete'
        onClick={handleDelete}
      >
        delete
      </button>
    </li>
  );
};

export default TodoItem;
