import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Chat from "./pages/chat"; // Ensure file names match
import SavedIdeas from "./pages/savedIdeas";
import Canvas from "./pages/canvas";
import "./App.css";

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const saveIdea = (newIdea) => {
    setIdeas((prevIdeas) => [...prevIdeas, newIdea]); // Using functional update
  };

  return (
    <Router>
      <nav>
        <Link to="/">Chat</Link> | <Link to="/saved">Saved Ideas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Chat saveIdea={saveIdea} />} />
        <Route path="/saved" element={<SavedIdeas ideas={ideas} />} />
        <Route path="/canvas/:id" element={<Canvas ideas={ideas} />} />
      </Routes>
    </Router>
  );
};

export default App;
