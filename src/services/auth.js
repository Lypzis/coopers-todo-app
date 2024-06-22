import API from "./api";

const authService = {
  login: async (userData) => {
    try {
      const response = await API.post("/auth/login", userData);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Save token to localStorage
      }
      return response.data;
    } catch (error) {
      console.error("Login error", error.response);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token"); // Remove token from localStorage
  },
};

export default authService;
