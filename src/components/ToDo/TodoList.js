import React, { useState } from "react";
import API from "../../services/api";
import TodoItem from "./TodoItem";
import { DragDropContext, Draggable } from "react-beautiful-dnd";
import StrictModeDroppable from "../StrictModeDroppable";

const TodoList = ({ items, setItems, title, subtitle, done, fetchTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return; // Do not add empty todos

    setIsLoading(true);
    try {
      await API.post("/todos", { description: newTodo });
      setNewTodo("");
      fetchTodos(); // Refresh the list after adding a new item
    } catch (error) {
      console.error("Failed to add new todo", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEraseAll = async () => {
    try {
      await API.delete("/todos", { params: { done } });
      fetchTodos(); // Refresh the list after deleting the items
    } catch (error) {
      console.error("Failed to erase all todos", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const updatedItems = Array.from(items);
    const [reorderedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, reorderedItem);

    setItems(updatedItems);
  };

  return (
    <div
      className={
        done
          ? "todo-box__card todo-box__card--left"
          : "todo-box__card todo-box__card--right"
      }
    >
      <div className='todo-box__upper'>
        <div className='todo-box__title'>
          <h1 className='heading-tertiary heading-tertiary--todo heading-tertiary--no-margin'>
            {title}
          </h1>
          {subtitle.map((item, index) => (
            <h2
              key={index}
              className='heading-secondary heading-secondary--todo'
            >
              {item}
            </h2>
          ))}
        </div>

        {!done && (
          <div className='todo-box__new-item'>
            <button className='check-button'>
              <span className='circle circle--done'></span>
            </button>
            <input
              className='todo-box__input paragraph-secondary paragraph-secondary--bold'
              placeholder='Add New Task'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onBlur={handleAddTodo} // Add todo on blur
              onKeyPress={handleKeyPress} // Add todo on Enter key press
              disabled={isLoading} // Disable input while loading
            />
          </div>
        )}

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <StrictModeDroppable droppableId={`droppable-${title}`}>
            {(provided) => (
              <ul
                className='todo-box__list'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {items.map((item, index) => (
                  <Draggable
                    key={item._id}
                    draggableId={item._id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        className='todo-box__list-item'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TodoItem item={item} fetchTodos={fetchTodos} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </StrictModeDroppable>
        </DragDropContext>
      </div>

      <button
        className='btn btn__secondary heading-tertiary heading-tertiary--no-margin'
        onClick={handleEraseAll}
      >
        erase all
      </button>
    </div>
  );
};

export default TodoList;
