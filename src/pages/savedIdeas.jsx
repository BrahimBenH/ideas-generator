import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Saved Ideas</h1>
      {ideas.length === 0 ? (
        <p>No saved ideas yet.</p>
      ) : (
        ideas.map((idea, index) => (
          <div key={index}>
            <p>{idea}</p>
            <Link to={`/canvas/${index}`}>Go to Canvas</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedIdeas;
