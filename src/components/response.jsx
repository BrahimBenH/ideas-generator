import React from 'react';
import './response.css'; // Import the CSS file
import "../App.css";

function Response({ response, handleItemClick, clickedItems }) {
  return (
    <div className="none">
      <strong className="response-title">Response:</strong>
      <ul className="response-list">
        {Array.isArray(response) &&
          response.map((idea, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={`response-item ${clickedItems[index] ? 'clicked' : ''}`}
            >
              {idea}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Response;
