import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./savedIdeas.css";

const SavedIdeas = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    try {
      const savedIdeas = JSON.parse(localStorage.getItem("savedIdeas")) || [];
      setIdeas(savedIdeas);
    } catch (error) {
      console.error("Error loading saved ideas:", error);
      setIdeas([]);
    }
  }, []);

  return (
    <div className="saved-ideas-container">
    <h1 className="saved-ideas-title">Saved Ideas</h1>
    {ideas.length === 0 ? (
      <p className="saved-ideas-message">No saved ideas yet.</p>
    ) : (
      ideas.map((idea, index) => (
        <Link 
          key={index} 
          to={`/canvas/${index}`} 
          className="saved-idea-item"
        >
          {idea}
        </Link>
      ))
    )}
  </div>
  
  

  );
};

export default SavedIdeas;
