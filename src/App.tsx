// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes"; // Import the Routes component

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
