import React from "react";
import { useNavigate } from "react-router-dom";
import { Calculator, PieChart, FileText, File } from "lucide-react";

const SideBar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 bg-[#1a1a1a] p-6 border-r border-gray-800 flex flex-col">
      <h2 className="text-xl font-bold mb-6 text-white">Navigation</h2>
      <ul className="space-y-4 text-sm text-gray-300">
        {/* Cost Calculator Navigation */}
        <li
          onClick={() => navigate("/dashboard")}
          className="hover:text-green-400 cursor-pointer flex items-center gap-2 transition-colors duration-200"
        >
          <Calculator size={16} /> Cost Calculator
        </li>
        {/* Insights Navigation */}
        <li
          onClick={() => navigate("/insights")} // Added navigation for Insights
          className="hover:text-green-400 cursor-pointer flex items-center gap-2 transition-colors duration-200"
        >
          <PieChart size={16} /> Insights
        </li>
        {/* Reports Navigation */}
        <li
          onClick={() => navigate("/reports")} // Added navigation for Reports
          className="hover:text-green-400 cursor-pointer flex items-center gap-2 transition-colors duration-200"
        >
          <FileText size={16} /> Reports
        </li>
        {/* Templates Navigation */}
        <li
          onClick={() => navigate("/templates")} // Added navigation for Templates
          className="hover:text-green-400 cursor-pointer flex items-center gap-2 transition-colors duration-200"
        >
          <File size={16} /> Templates
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
