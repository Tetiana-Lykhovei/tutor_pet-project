import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useRoutes } from "./routes";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Modal from "react-modal";
import "materialize-css";

Modal.setAppElement("#root");

function App() {
  const { token, login, logout, userId } = useAuth();

  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        <Navbar />
        <ScrollToTop />
        <div className="container">{routes}</div>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
