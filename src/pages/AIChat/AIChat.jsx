
import { useState } from 'react'
import './AIChat.css'

const AIChat = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    
    setMessages([...messages, { text: input, sender: 'user' }])
    setInput('')
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Im here to help with your development questions!', 
        sender: 'ai' 
      }])
    }, 1000)
  }

  return (
    <div className="chat">
      <h1>AI Assistant</h1>
      
      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              <div className="message-content">{msg.text}</div>
            </div>
          ))}
        </div>
        
        <form onSubmit={sendMessage} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default AIChat