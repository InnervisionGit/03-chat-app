import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };
  console.log(input);
  console.log(messages);
  return (
    <div className='App'>
      <h1>Innervision Chat App</h1>
      <div className='chat-container'>
        <div className='chat-texts'>
          {messages.map((message, key) => (
            <Message text={message} key={key} />
          ))}
        </div>
        <div className='chat-ui'>
          <form>
            <input
              className='chat-input'
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <Button
              className='chat-btn'
              disabled={!input}
              variant='contained'
              color='primary'
              type='submit'
              onClick={sendMessage}
            >
              Chat
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
