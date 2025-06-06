import React, { useContext, useState } from 'react'
import "./App.css"
import va from "./assets/zippy02_img.png"
import { PiDogFill } from "react-icons/pi";
import { dataContext } from './context/UserContext';

function App() {
  const [isListening, setIsListening] = useState(false);
  const { recognition } = useContext(dataContext);

  // Add event listeners for recognition states
  recognition.onstart = () => {
    setIsListening(true);
    console.log('Voice recognition activated');
  };

  recognition.onend = () => {
    setIsListening(false);
    console.log('Voice recognition ended');
  };

  const handleListen = () => {
    try {
      recognition.start();
    } catch (error) {
      if (error.message === 'Failed to execute \'start\' on \'SpeechRecognition\': recognition has already started.') {
        recognition.stop();
      }
    }
  };

  return (
    <div className="main">
      <img src={va} alt="Zippy AI Logo" id="zippy" />
      <span>Hey there! I'm Zippy, Your AI Dog Assistant</span>
      <button 
        onClick={handleListen}
        style={{ 
          background: isListening ? 'var(--primary-color)' : 'rgba(54, 165, 255, 0.1)'
        }}
      >
        {isListening ? 'Listening...' : 'Wanna bark!'} <PiDogFill />
      </button>
      <div className="benchmark">Prototype Project of EO'159</div>
    </div>
)
}

export default App