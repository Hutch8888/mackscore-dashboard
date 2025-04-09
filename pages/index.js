export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Sidebar / OperatorPanel */}
      <div className="w-1/3 bg-gray-900 p-6 border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-4">Operator Panel 🧠</h1>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">ChatGPT Operator Console</div>
          <div className="bg-gray-800 p-4 rounded-lg">Live Metrics</div>
          <div className="bg-gray-800 p-4 rounded-lg">Simulations</div>
        </div>
      </div>

      {/* Main Display Area */}
      <div className="w-2/3 p-10">
        <h2 className="text-3xl font-semibold mb-6">Welcome to the Mackscore Dashboard 🧬</h2>
        <p className="text-lg text-gray-300">
          This is your live operator space. Here, you’ll soon see simulations, metric breakdowns, and betting insights powered by Mack 8 Star ⭐️.
        </p>
      </div>
    </div>
  );
}

