import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', text: 'Hi there! I am the Green Haven AI Assistant. How can I help you find the perfect plant today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), type: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Mock AI response
    setTimeout(() => {
      const aiResponses = [
        "That's a great question! Our indoor plants like the Monstera or Calathea would be perfect for that.",
        "We offer free shipping on all orders over ₹999. Can I help you add anything else to your cart?",
        "If you're looking for low-light plants, I highly recommend our Snake Plant collection.",
        "Yes, we do have pet-friendly options! Check out our 'Safe for Pets' category.",
        "I'm a demo AI, but if I were real, I'd give you the best plant advice in the world! 🌿"
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [...prev, { id: Date.now(), type: 'ai', text: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window animate-fade-in-up">
          <div className="chat-header">
            <div className="chat-header-info">
              <Bot size={24} />
              <div>
                <h4>Plant Assistant</h4>
                <p>Always active</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble ${msg.type}`}>
                {msg.type === 'ai' ? <Bot size={16} className="msg-icon" /> : <User size={16} className="msg-icon" />}
                <p>{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <form className="chat-input" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              placeholder="Ask about our plants..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" disabled={!inputValue.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
