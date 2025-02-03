import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Canvas = ({ ideas }) => {
  const { id } = useParams();
  const idea = ideas[id];
  const [details, setDetails] = useState(localStorage.getItem(`details-${JSON.parse(localStorage.getItem("savedIdeas"))[id]}`) !== null? (localStorage.getItem(`details-${JSON.parse(localStorage.getItem("savedIdeas"))[id]}`).slice(1, -1)) : "");

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
    <div>
      <h1>{JSON.parse(localStorage.getItem("savedIdeas"))[id]}</h1>
      <h2>{idea}</h2>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        placeholder={details}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Canvas;
