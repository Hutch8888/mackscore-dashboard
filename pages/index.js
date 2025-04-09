export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar / OperatorPanel */}
      <div className="w-1/3 bg-gray-900 p-6 border-r border-gray-700 flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Operator Panel 🧠</h1>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg">ChatGPT Operator Console</div>
            <div className="bg-gray-800 p-4 rounded-lg">Live Metrics</div>
            <div className="bg-gray-800 p-4 rounded-lg">Simulations</div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Type a command..."
            className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Right Panel Placeholder */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-4">Mackscore Dashboard 🚀</h2>
        <p className="text-gray-300">Welcome, Operator. From here, we’ll run simulations, metric breakdowns, and betting insights powered by Mack 8 Star ⭐️.</p>
      </div>
    </div>
  );
}

