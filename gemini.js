const api_key = "AIzaSyCg_Z2MdgF4L0oNJIUASDnpg1zb4VUJBmo";

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenerativeAI,
  HarmCategory, 
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 // change korle sudhu eta!!!

const generationConfig = {  
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 20,
  responMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession=model.startChat({
    history: [],
  });
 
  const result=await chatSession.sendMessage(prompt);
    return result.response.text();
}

export default run;