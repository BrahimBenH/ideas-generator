import axios from "axios";

const API_KEY = "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"; // Replace with your OpenRouter API key
const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";

export const getBrainstormIdea = async (prompt) => {
  try {
    const response = await axios.post(
      BASE_URL,
      {
        model: "mistralai/mistral-7b-instruct", // Specific model identifier
        messages: [{ role: "user", content: prompt },
          {role: "system", content: "Respond with exactly 10 ideas, formatted strictly as a valid JSON array. Example: [\"idea 1\", \"idea 2\", \"idea 3\"]. Do not include any explanations, additional text, or special characters—only return the JSON array."}

                  ],
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.href, // Required by OpenRouter
          "X-Title": "React Brainstorming App" // Recommended by OpenRouter
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return "Error generating idea.";
  }
};
