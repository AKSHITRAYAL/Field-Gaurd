"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  AlertTriangle,
  Droplets,
  Sun,
  Leaf,
  MapPin,
  Phone,
  TrendingUp,
  Shield,
  Brain,
  Menu,
  X,
  BookOpen, // Added for new learning hub
  Clock, // Added for new learning hub
  BarChart2, // Added for new learning hub
} from "lucide-react";

const Dashboard = () => {
  const [selectedField, setSelectedField] = useState("Field 1");
  const [activeTab, setActiveTab] = useState("overview");
  const [insightsPeriod, setInsightsPeriod] = useState("30days");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [learningCategory, setLearningCategory] = useState("All"); // State for learning filters

  // --- Data ---

  const fields = ["Field 1", "Field 2", "Field 3"];
  const cropHealthData = [
    { day: "Mon", health: 85 },
    { day: "Tue", health: 82 },
    { day: "Wed", health: 78 },
    { day: "Thu", health: 75 },
    { day: "Fri", health: 70 },
    { day: "Sat", health: 68 },
    { day: "Sun", health: 65 },
  ];
  const weatherData = [
    { time: "Morning", temp: 25, rain: 0 },
    { time: "Afternoon", temp: 35, rain: 10 },
    { time: "Evening", temp: 30, rain: 20 },
    { time: "Night", temp: 22, rain: 5 },
  ];
  const insightsData = {
    "7days": [
      {
        metric: "Crop Health",
        value: 65,
        trend: -12,
        insight: "Declining due to water stress",
      },
      {
        metric: "Yield Prediction",
        value: 85,
        trend: -8,
        insight: "Expected 15% below normal",
      },
      {
        metric: "Disease Risk",
        value: 40,
        trend: +15,
        insight: "High humidity increasing risk",
      },
    ],
    "30days": [
      {
        metric: "Crop Health",
        value: 72,
        trend: -18,
        insight: "Seasonal decline pattern",
      },
      {
        metric: "Yield Prediction",
        value: 78,
        trend: -12,
        insight: "Recovery needed urgently",
      },
      {
        metric: "Disease Risk",
        value: 35,
        trend: +20,
        insight: "Monsoon-related risks rising",
      },
    ],
    "90days": [
      {
        metric: "Crop Health",
        value: 80,
        trend: -25,
        insight: "Long-term stress factors",
      },
      {
        metric: "Yield Prediction",
        value: 70,
        trend: -20,
        insight: "Season performance below average",
      },
      {
        metric: "Disease Risk",
        value: 45,
        trend: +30,
        insight: "Multiple disease cycles observed",
      },
    ],
  };
  const riskData = [
    { name: "Low Risk", value: 45, color: "#22c55e" },
    { name: "Medium Risk", value: 35, color: "#f59e0b" },
    { name: "High Risk", value: 20, color: "#ef4444" },
  ];

  // --- NEW DATA FOR LEARNING HUB ---
  const learningVideosData = [
    {
      id: 1,
      title: "Advanced Drip Irrigation Techniques",
      instructor: "AgriUniversity Online",
      duration: "2h 30m",
      level: "Intermediate",
      category: "Water Management",
      thumbnail:
        "https://placehold.co/600x400/22c55e/FFFFFF/png?text=Irrigation",
    },
    {
      id: 2,
      title: "Organic Pest Control Methods",
      instructor: "Green Farms Academy",
      duration: "1h 45m",
      level: "Beginner",
      category: "Pest Control",
      thumbnail:
        "https://placehold.co/600x400/f59e0b/FFFFFF/png?text=Pest+Control",
    },
    {
      id: 3,
      title: "Maximizing Yield with Soil Analysis",
      instructor: "Dr. Alisha Verma",
      duration: "3h 15m",
      level: "Advanced",
      category: "Soil Health",
      thumbnail:
        "https://placehold.co/600x400/a855f7/FFFFFF/png?text=Soil+Health",
    },
    {
      id: 4,
      title: "Introduction to Hydroponics",
      instructor: "Future Farms Co.",
      duration: "2h 00m",
      level: "Beginner",
      category: "Modern Farming",
      thumbnail:
        "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Hydroponics",
    },
    {
      id: 5,
      title: "Sustainable Water Conservation",
      instructor: "EcoGrow Institute",
      duration: "1h 30m",
      level: "Intermediate",
      category: "Water Management",
      thumbnail:
        "https://placehold.co/600x400/22c55e/FFFFFF/png?text=Water+Savings",
    },
    {
      id: 6,
      title: "Soil Nutrient Management",
      instructor: "Dr. Rahul Singh",
      duration: "2h 45m",
      level: "Advanced",
      category: "Soil Health",
      thumbnail:
        "https://placehold.co/600x400/a855f7/FFFFFF/png?text=Nutrients",
    },
  ];

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-green-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-xl font-bold text-green-800">Farm AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "overview"
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("insights")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "insights"
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Insights
              </button>
              <button
                onClick={() => setActiveTab("risk")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "risk"
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Risk Analysis
              </button>
              <button
                onClick={() => setActiveTab("learning")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "learning"
                    ? "bg-green-100 text-green-800 font-semibold"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                Smart Learning
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-green-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t py-4 space-y-2">
              <button
                onClick={() => handleNavClick("overview")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-green-50"
              >
                Overview
              </button>
              <button
                onClick={() => handleNavClick("insights")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-green-50"
              >
                Insights
              </button>
              <button
                onClick={() => handleNavClick("risk")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-green-50"
              >
                Risk Analysis
              </button>
              <button
                onClick={() => handleNavClick("learning")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-green-50"
              >
                Smart Learning
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="p-4">{renderContent()}</div>
    </div>
  );

  function renderContent() {
    switch (activeTab) {
      case "insights":
        return renderInsights();
      case "risk":
        return renderRisk();
      case "learning":
        return renderLearning();
      default:
        return renderOverview();
    }
  }

  function renderInsights() {
    /* ... (This function is unchanged) ... */
    const currentInsights = insightsData[insightsPeriod];
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              Farm Insights
            </h2>
            <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-lg">
              {["7days", "30days", "90days"].map((period) => (
                <button
                  key={period}
                  onClick={() => setInsightsPeriod(period)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    insightsPeriod === period
                      ? "bg-white text-green-700 shadow"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Last {period.replace("days", "")} Days
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentInsights.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.metric}
              </h3>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-4xl font-bold text-blue-600">
                  {item.value}%
                </span>
                <span
                  className={`text-sm font-bold flex items-center gap-1 ${
                    item.trend < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  <TrendingUp
                    className={`w-4 h-4 ${item.trend < 0 ? "rotate-180" : ""}`}
                  />
                  {Math.abs(item.trend)}%
                </span>
              </div>
              <p className="text-gray-600 text-sm">{item.insight}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Detailed Analysis
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Key Recommendations
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-blue-500 mt-0.5" />
                  Increase irrigation frequency by 20%
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                  Apply preventive fungicide treatment
                </li>
                <li className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-yellow-500 mt-0.5" />
                  Monitor temperature stress during afternoon
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">
                Expected Outcomes
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Yield improvement: 12-15%</li>
                <li>• Disease risk reduction: 25%</li>
                <li>• Water efficiency: +18%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderOverview() {
    /* ... (This function is unchanged) ... */
    return (
      <>
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-green-800">
                🌾 Farm Dashboard
              </h1>
              <p className="text-green-600">Your Crop Information</p>
            </div>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="px-4 py-2 border-2 border-green-300 rounded-lg text-lg focus:border-green-500"
            >
              {fields.map((field) => (
                <option key={field} value={field}>
                  {field}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Leaf className="w-12 h-12 text-green-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Crop Health</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">65%</div>
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Needs Attention
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Droplets className="w-12 h-12 text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Water Level</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              Low Water
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Sun className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Today&apos;s Weather</h3>
            <div className="text-3xl font-bold text-yellow-600 mb-2">35°C</div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              Rain Expected
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold mb-2">Disease Risk</h3>
            <div className="text-3xl font-bold text-red-600 mb-2">40%</div>
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Be Careful
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-green-500" />
              Last 7 Days Crop Health
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={cropHealthData}>
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value) => [`${value}%`, "Health"]} />
                  <Line
                    type="monotone"
                    dataKey="health"
                    stroke="#22c55e"
                    strokeWidth={4}
                    dot={{ fill: "#22c55e", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-600 mt-2">
              📉 Crop health is declining - needs water and treatment
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-yellow-500" />
              Today&apos;s Weather
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weatherData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="temp" fill="#f59e0b" name="Temperature °C" />
                  <Bar dataKey="rain" fill="#3b82f6" name="Rain %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-gray-600 mt-2">
              🌧️ Rain possible in the afternoon
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            Today&apos;s Tasks
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <Droplets className="w-6 h-6 text-red-500" />
              <div>
                <p className="font-semibold text-red-800">Water Shortage</p>
                <p className="text-red-600">Irrigate by this evening</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <AlertTriangle className="w-6 h-6 text-orange-500" />
              <div>
                <p className="font-semibold text-orange-800">Disease Check</p>
                <p className="text-orange-600">Monitor leaves for diseases</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <Sun className="w-6 h-6 text-blue-500" />
              <div>
                <p className="font-semibold text-blue-800">Weather Update</p>
                <p className="text-blue-600">Rain expected tomorrow morning</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500 text-white rounded-lg p-6 text-center cursor-pointer hover:bg-green-600 transition-colors">
            <Phone className="w-8 h-8 mx-auto mb-2" />
            <h4 className="font-semibold">Get Advice</h4>
            <p className="text-sm">Call agricultural expert</p>
          </div>
          <div className="bg-blue-500 text-white rounded-lg p-6 text-center cursor-pointer hover:bg-blue-600 transition-colors">
            <Leaf className="w-8 h-8 mx-auto mb-2" />
            <h4 className="font-semibold">New Scan</h4>
            <p className="text-sm">Take new crop photos</p>
          </div>
          <div className="bg-purple-500 text-white rounded-lg p-6 text-center cursor-pointer hover:bg-purple-600 transition-colors">
            <MapPin className="w-8 h-8 mx-auto mb-2" />
            <h4 className="font-semibold">Field Details</h4>
            <p className="text-sm">View complete field</p>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 p-4 bg-white rounded-lg">
          <p className="text-sm">🤖 Powered by Artificial Intelligence</p>
          <p className="text-sm">24/7 Crop Monitoring</p>
          <div className="mt-2">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-sm">System Online</span>
          </div>
        </div>
      </>
    );
  }

  function renderRisk() {
    /* ... (This function is unchanged) ... */
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-red-500" />
            Risk Analysis
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Risk Distribution
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={riskData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Risk Factors
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800">
                    High Risk Areas
                  </h4>
                  <ul className="mt-2 text-sm text-red-600 space-y-1">
                    <li>• Disease pressure: 65% probability</li>
                    <li>• Water stress in Zone B</li>
                    <li>• Pest activity increasing</li>
                  </ul>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800">
                    Medium Risk Areas
                  </h4>
                  <ul className="mt-2 text-sm text-yellow-600 space-y-1">
                    <li>• Soil nutrient depletion</li>
                    <li>• Irregular growth patterns</li>
                    <li>• Weather sensitivity</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800">
                    Low Risk Areas
                  </h4>
                  <ul className="mt-2 text-sm text-green-600 space-y-1">
                    <li>• Healthy crop development</li>
                    <li>• Optimal soil conditions</li>
                    <li>• Good water management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Preventive Measures
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Droplets className="w-6 h-6 text-blue-500 mb-2" />
              <h4 className="font-semibold">Water Management</h4>
              <p className="text-sm text-gray-600">
                Install drip irrigation in high-risk zones
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <Shield className="w-6 h-6 text-green-500 mb-2" />
              <h4 className="font-semibold">Disease Control</h4>
              <p className="text-sm text-gray-600">
                Apply bio-fungicides every 15 days
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <Sun className="w-6 h-6 text-yellow-500 mb-2" />
              <h4 className="font-semibold">Weather Protection</h4>
              <p className="text-sm text-gray-600">
                Use shade nets during heat waves
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- renderLearning() FUNCTION UPDATED HERE ---
  function renderLearning() {
    const categories = [
      "All",
      ...new Set(learningVideosData.map((v) => v.category)),
    ];
    const filteredVideos = learningVideosData.filter(
      (video) =>
        learningCategory === "All" || video.category === learningCategory
    );

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-600" />
            Farmer&apos;s Learning Hub
          </h2>
          <p className="text-gray-600 mt-1">
            Improve your farming skills with expert courses.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setLearningCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                learningCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex-grow">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{video.instructor}</p>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      video.level === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : video.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <BarChart2 className="w-3 h-3" />
                    {video.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {video.duration}
                  </span>
                </div>
                <button className="w-full mt-auto bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition-transform transform group-hover:scale-105">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Dashboard;
