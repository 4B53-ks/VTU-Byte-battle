import React from "react";
import { Download } from "lucide-react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import SideBar from "./SideBar";

const pieData = [
  { name: "Raw Materials", value: 4500 },
  { name: "Labor", value: 2200 },
  { name: "Overheads", value: 1800 },
  { name: "Misc", value: 700 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const Reports = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 px-6 py-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-2">Reports</h2>
          <p className="text-gray-400 mb-6">
            View and manage all your past production cost reports with export options and insights.
          </p>

          {/* Export Buttons */}
          <div className="flex gap-4 mb-8 flex-wrap">
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md flex items-center gap-2 text-white">
              <Download size={16} /> Export as PDF
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md flex items-center gap-2 text-white">
              <Download size={16} /> Export as Excel
            </button>
          </div>

          {/* Charts + Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Pie Chart */}
            <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-4">Cost Category Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Reports Table */}
            <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md overflow-x-auto">
              <h3 className="text-lg font-semibold mb-4">Recent Reports</h3>
              <table className="w-full text-sm text-left text-gray-300">
                <thead className="text-gray-400 border-b border-gray-600">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Product</th>
                    <th className="p-2">Total Cost</th>
                    <th className="p-2">Saved As</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: "2025-06-12", product: "Smart Watch", cost: "₹12,930", name: "Smart_Template" },
                    { date: "2025-06-10", product: "Router Unit", cost: "₹9,350", name: "Router_Template" },
                    { date: "2025-06-08", product: "LED Panel", cost: "₹14,400", name: "LED_Template" },
                  ].map((report, idx) => (
                    <tr key={idx} className="hover:bg-[#2a2a2a] border-b border-gray-700">
                      <td className="p-2">{report.date}</td>
                      <td className="p-2">{report.product}</td>
                      <td className="p-2">{report.cost}</td>
                      <td className="p-2">{report.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-3">Summary</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              The above reports summarize production costs for various products. Charts help visualize
              the percentage breakdown by category. You can export the reports and use them to monitor
              budgeting efficiency, compare multiple configurations, and improve production planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
