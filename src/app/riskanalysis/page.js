"use client";
import React from "react";
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
  Legend,
} from "recharts";
import {
  Shield,
  TrendingUp,
  Droplets,
  Wind,
  Bug,
  AlertTriangle,
  CheckCircle,
  Map,
  ClipboardList,
} from "lucide-react";

// Mock Data for the detailed page
const keyRiskMetrics = {
  overallScore: 72,
  highestRisk: "Fungal Disease",
  fieldsAtRisk: 2,
};

const riskTrendData = [
  { date: "Aug 1", risk: 45 },
  { date: "Aug 7", risk: 50 },
  { date: "Aug 14", risk: 65 },
  { date: "Aug 21", risk: 60 },
  { date: "Aug 28", risk: 72 },
];

const riskBreakdownData = [
  {
    name: "Fungal Disease",
    probability: 68,
    impact: "High",
    color: "#ef4444",
  },
  {
    name: "Pest Infestation",
    probability: 55,
    impact: "High",
    color: "#ef4444",
  },
  { name: "Drought", probability: 45, impact: "Medium", color: "#f59e0b" },
  { name: "Heat Stress", probability: 40, impact: "Medium", color: "#f59e0b" },
  {
    name: "Nutrient Deficiency",
    probability: 25,
    impact: "Low",
    color: "#22c55e",
  },
];

const fieldRiskMapData = [
  { id: "Field 1", zone: "A", risk: "Low" },
  { id: "Field 1", zone: "B", risk: "Low" },
  { id: "Field 2", zone: "A", risk: "Medium" },
  { id: "Field 2", zone: "B", risk: "High" },
  { id: "Field 3", zone: "A", risk: "Low" },
  { id: "Field 3", zone: "B", risk: "Medium" },
];

const mitigationPlanData = [
  {
    action: "Apply Fungicide to Field 2, Zone B",
    reason: "High humidity and observed early signs of blight.",
    priority: "High",
    status: "Pending",
  },
  {
    action: "Increase Irrigation in Field 2 & 3",
    reason: "Forecasted heatwave and low soil moisture levels.",
    priority: "High",
    status: "Pending",
  },
  {
    action: "Deploy Pheromone Traps in Field 2",
    reason: "Increased pest activity detected by sensors.",
    priority: "Medium",
    status: "In Progress",
  },
  {
    action: "Soil Nutrient Test for Field 3",
    reason: "Slight discoloration observed on lower leaves.",
    priority: "Low",
    status: "Completed",
  },
];

// Helper to get colors and icons based on priority/risk/status
const getStatusStyles = (status) => {
  switch (status.toLowerCase()) {
    case "high":
    case "pending":
      return {
        bgColor: "bg-red-100",
        textColor: "text-red-800",
        borderColor: "border-red-500",
      };
    case "medium":
    case "in progress":
      return {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-800",
        borderColor: "border-yellow-500",
      };
    case "low":
    case "completed":
      return {
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        borderColor: "border-green-500",
      };
    default:
      return {
        bgColor: "bg-gray-100",
        textColor: "text-gray-800",
        borderColor: "border-gray-500",
      };
  }
};

const RiskAnalysisPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <Shield className="w-8 h-8 text-red-500" />
          Comprehensive Risk Analysis
        </h1>
        <p className="text-gray-600 mt-1">
          Detailed overview of potential threats and mitigation plans.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Overall Risk Score
          </h3>
          <p className="text-5xl font-bold text-red-600">
            {keyRiskMetrics.overallScore}
            <span className="text-2xl text-gray-500">/100</span>
          </p>
          <div
            className={`mt-3 inline-flex items-center gap-2 ${
              getStatusStyles("High").textColor
            } ${getStatusStyles("High").bgColor} px-3 py-1 rounded-full`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-semibold">High</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Highest Risk Factor
          </h3>
          <p className="text-3xl font-bold text-gray-800">
            {keyRiskMetrics.highestRisk}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-gray-600">
            <Bug className="w-5 h-5 text-red-500" />
            <span className="text-sm">Probability: 68%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Fields at High Risk
          </h3>
          <p className="text-5xl font-bold text-blue-600">
            {keyRiskMetrics.fieldsAtRisk}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-gray-600">
            <Map className="w-5 h-5 text-blue-500" />
            <span className="text-sm">Require immediate attention</span>
          </div>
        </div>
      </div>

      {/* Risk Trend & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Risk Trend Over Time */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            Risk Trend (Last 30 Days)
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskTrendData}>
                <XAxis dataKey="date" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="risk"
                  stroke="#ef4444"
                  strokeWidth={3}
                  name="Risk Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Breakdown */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-yellow-500" />
            Risk Factor Breakdown
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskBreakdownData} layout="vertical">
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, "Probability"]} />
                <Bar dataKey="probability" name="Probability">
                  {riskBreakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Field Risk Map */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Map className="w-6 h-6 text-green-600" />
          Field Risk Heatmap
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {fieldRiskMapData.map((field) => {
            const styles = getStatusStyles(field.risk);
            return (
              <div
                key={`${field.id}-${field.zone}`}
                className={`p-4 rounded-lg border-2 ${styles.borderColor} ${styles.bgColor} text-center`}
              >
                <p className={`font-bold ${styles.textColor}`}>{field.id}</p>
                <p className={`text-sm ${styles.textColor}`}>
                  Zone {field.zone}
                </p>
                <span
                  className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full border ${styles.borderColor}`}
                >
                  {field.risk} Risk
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mitigation Plan */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <ClipboardList className="w-6 h-6 text-purple-600" />
          Actionable Mitigation Plan
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mitigationPlanData.map((item, index) => {
                const priorityStyles = getStatusStyles(item.priority);
                const statusStyles = getStatusStyles(item.status);
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {item.action}
                      </div>
                      <div className="text-sm text-gray-500">{item.reason}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${priorityStyles.bgColor} ${priorityStyles.textColor}`}
                      >
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles.bgColor} ${statusStyles.textColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisPage;
