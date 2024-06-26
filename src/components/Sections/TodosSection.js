import React, { useEffect, useState } from "react";
import leftGraph from "../../img/leftGraph.png";
import TodoList from "../ToDo/TodoList";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../services/api";

function TodosSection() {
  const { isAuthenticated } = useAuth();
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTodos();
    }
  }, [isAuthenticated]);

  const fetchTodos = async () => {
    setError(null);

    try {
      const response = await API.get("/todos");
      const todos = response.data;

      const pendingTodos = todos.filter((todo) => !todo.done);
      const completedTodos = todos.filter((todo) => todo.done);

      setTodoItems(pendingTodos);
      setDoneItems(completedTodos);
    } catch (error) {
      setError("Failed to fetch todos. Please try again.");
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className='section-todos' aria-labelledby='todoSectionTitle'>
      <img
        src={leftGraph}
        alt='Decorative piece'
        className='left__graph'
        role='presentation'
      />
      <div className='todo-box' aria-labelledby='todoListDescription'>
        <h1 id='todoSectionTitle' className='visually-hidden'>
          Task Management
        </h1>
        <TodoList
          items={todoItems}
          setItems={setTodoItems}
          title='To-do'
          subtitle={["Take a breath.", "Start doing."]}
          done={false}
          fetchTodos={fetchTodos}
        />
        <TodoList
          items={doneItems}
          setItems={setDoneItems}
          title='Done'
          subtitle={["Congratulations!", "You have done 5 tasks"]}
          done={true}
          fetchTodos={fetchTodos}
        />
      </div>
    </section>
  );
}

export default TodosSection;
