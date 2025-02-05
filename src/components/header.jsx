import React from 'react';
import "./header.css"; // Ensure this file is imported
import "../App.css";

function Header({ input, setInput, handleSubmit }) {
  return (
    <div className="header-container">
   

      <h2 className="header-title">💡 Brainstorming Chat 💡</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your idea prompt..."
        className="header-input"
      />
      <button onClick={handleSubmit} className="header-button">
        Generate Ideas 🚀
      </button>
    </div>
  );
}

export default Header;
