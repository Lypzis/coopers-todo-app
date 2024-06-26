import React from "react";
import { AuthProvider } from "./contexts/AuthContext"; // Adjust the path as necessary
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
