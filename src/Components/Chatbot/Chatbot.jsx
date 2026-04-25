import React, { useEffect, useState } from "react";
import "./Chatbot.css";
import API from "../../api";
const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋 I am your Travel Assistant. How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 const handleSend = async () => {
  if (input.trim() === "") return;

  const userMessage = { sender: "user", text: input };
  setMessages((prev) => [...prev, userMessage]);

  const userText = input;
  setInput("");

  try {
    const res = await API.post("chat/", {
      message: userText,
    });

    const botReply = res.data.reply;

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: botReply },
    ]);
  } catch (error) {
    console.error("API ERROR:", error);

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "Server error. AI not working." },
    ]);
  }
};
  return (
    <section className="chatbot section">
      <div className="chatbotContainer">

        <h2 className="sectionTitle">AI Travel Assistant</h2>
        <p className="chatbotDesc">
          Ask me anything about travel, tours, or destinations
        </p>

        <div className="chatBox">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "userMsg" : "botMsg"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="inputBox">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend} className="btn">
            Send
          </button>
        </div>

      </div>
    </section>
  );
};

export default Chatbot;






