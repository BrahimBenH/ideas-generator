import React, { useState } from 'react';

function Response({ response,  handleItemClick, clickedItems }) {

  return (
    <div >
   
      
      <strong>Response:</strong>
      <ul>
        {Array.isArray(response) ? (
          response.map((idea, index) => (
            <li 
              key={index}
              onClick={() => handleItemClick(index)}
              style={{
                cursor: 'pointer',
                backgroundColor: clickedItems[index] ? '#e0e0e0' : 'transparent'
              }}
            >
              {idea} 
            </li>
          ))
        ) : null}
      </ul>
    </div>
  );
}

export default Response;