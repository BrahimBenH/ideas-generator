import React from 'react';


function Header({ input, setInput, handleSubmit }) {
  return (
    <div>
      <h2>Brainstorming Chat</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your idea prompt..."
        style={{ width: "300px", padding: "8px" }}
      />
      <button 
        onClick={handleSubmit} 
        style={{ marginLeft: "10px", padding: "8px" }}
      >
        Generate Ideas
      </button>
      <br /><br />
    </div>
  );
}

export default Header;