import { useState } from 'react';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const newMessage = { text: input.trim(), type: 'user' };
      setMessages((prev) => [...prev, newMessage]);

      // Simulate response from Joshua (AI)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `Acknowledged: "${input.trim()}"`, type: 'ai' },
        ]);
      }, 400);

      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-900 p-6 border-r border-gray-700 flex flex-col justify-between">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Operator Panel 🧠</h1>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">ChatGPT Operator Console</div>
            <div className="bg-gray-800 p-4 rounded-lg">Live Metrics</div>
            <div className="bg-gray-800 p-4 rounded-lg">Simulations</div>
          </div>
        </div>

        {/* Message Display */}
        <div className="my-4 space-y-2 max-h-52 overflow-y-auto transition-all duration-300 ease-in-out">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-lg ${
                msg.type === 'user' ? 'bg-purple-700 text-white' : 'bg-gray-800 text-green-300'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <input
          type="text"
          placeholder="Type a command..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-4">Mackscore Dashboard 🚀</h2>
        <p className="text-gray-300">
          Welcome, Operator. From here, we’ll run simulations, metric breakdowns, and betting insights powered by Mack 8 Star ⭐️.
        </p>
      </div>
    </div>
  );
}
