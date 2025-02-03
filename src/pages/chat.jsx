import { useState } from "react";
import Response from "../components/response";
import Header from "../components/header";

import { getBrainstormIdea } from "../api"; // Make sure the path is correct
let savedIdeas = [];
function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [clickedItems, setClickedItems] = useState({}); // Track clicked items

  const handleSubmit = async () => {
    if (!input.trim()) return;
    
    const idea = await getBrainstormIdea(input);
  
    try {
      // Remove any unwanted formatting
      const cleanedResponse = idea.replace(/```json|```/g, "").trim();
      const parsedResponse = JSON.parse(cleanedResponse);
  
      if (Array.isArray(parsedResponse)) {
        setResponse(parsedResponse);
        setClickedItems({}); // Reset clicked items when new ideas are generated
        localStorage.setItem("generatedIdeas", JSON.stringify(parsedResponse));
      } else {
        throw new Error("Response is not a valid JSON array.");
      }
    } catch (error) {
      console.error("Error parsing response:", error);
      setResponse(["Failed to parse response. Try again."]);
    }
  };

  const handleItemClick = (index) => {
    savedIdeas.push(response[index]);
    localStorage.setItem("savedIdeas", JSON.stringify(savedIdeas) )

    setClickedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  if (response!=="" && response!==undefined) {
  return (
    <div>
     
      <Header input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <Response
        response={response}
        handleItemClick={handleItemClick}
        clickedItems={clickedItems}

        />
    </div>
  );}
  else {
    return (
      <div>
       
        <Header  input={input} setInput={setInput} handleSubmit={handleSubmit} />
        <p>No responses yet</p>
       
      </div>
    );
  }
}

export default Chat;
