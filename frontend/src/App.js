import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const result = await axios.post('http://localhost:5000/api/chat', { message });
      setResponse(result.data);
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Failed to get response');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type your message here" />
        <button onClick={sendMessage}>Send</button>
        <p>Response: {response}</p>
      </header>
    </div>
  );
}

export default App;
