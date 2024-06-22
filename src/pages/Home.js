import React, { useState } from "react";
import axios from "axios";
import ToDoList from "../components/ToDo/ToDoList";
import AddToDo from "../components/ToDo/AddToDo";
import Login from "../components/Auth/Login";
import authService from "../services/auth";

function Home() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [showLogin, setShowLogin] = useState(false);

  /*useEffect(() => {
    fetchTodos();
  }, []); */

  const fetchTodos = async () => {
    const res = await axios.get("/api/todos"); // Update with correct endpoint
    setTodos(res.data);
  };

  const addToDo = async (description) => {
    const res = await axios.post("/api/todos", { description });
    setTodos([...todos, res.data]);
  };

  const handleLogin = async (loginData) => {
    try {
      const { token } = await authService.login(loginData);
      if (token) {
        setUser({ loggedIn: true });
        fetchTodos();
      }
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    setTodos([]); // Clear todos on logout
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  if (!user) {
    return (
      <div>
        <button onClick={toggleLoginModal}>Entrar</button>
        {showLogin && (
          <Login onLogin={handleLogin} onClose={toggleLoginModal} />
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <AddToDo addToDo={addToDo} />
      <ToDoList todos={todos} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
