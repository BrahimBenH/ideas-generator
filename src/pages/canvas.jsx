import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css"; // Ensure this import is at the top
import "./canvas.css"; 
const Canvas = ({ ideas }) => {
  const { id } = useParams();
  const idea = ideas[id];
  const [details, setDetails] = useState(localStorage.getItem(`details-${JSON.parse(localStorage.getItem("savedIdeas"))[id]}`) !== null ? (localStorage.getItem(`details-${JSON.parse(localStorage.getItem("savedIdeas"))[id]}`).slice(1, -1)) : "");

  const handleSave = () => {
    try {
      localStorage.setItem(`details-${JSON.parse(localStorage.getItem("savedIdeas"))[id]}`, JSON.stringify(details));
      alert("Saved successfully!");
    } catch (error) {
      console.error("Error saving details:", error);
      alert("Failed to save details");
    }
  };

  return (
    <div className="canvas-container">
      <h1 className="canvas-title">{JSON.parse(localStorage.getItem("savedIdeas"))[id]}</h1>
      <h2 className="canvas-description">{idea}</h2>
      <textarea
        className="canvas-textarea"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder="Enter details here..."
      />
      <button className="save-button" onClick={handleSave}>Save</button>
    </div>
  );
};

export default Canvas;
