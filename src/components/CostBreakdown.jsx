import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Raw Materials", value: 400 },
  { name: "Labor", value: 300 },
  { name: "Overheads", value: 200 },
  { name: "Misc", value: 100 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const CostBreakdown = () => {
  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md border border-gray-800">
      <div>
        <h2 className="text-lg font-semibold mb-4">Cost Breakdown</h2>
        <PieChart width={300} height={250}>
          <Pie
            data={data}
            cx={150}
            cy={100}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div>
        <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Detailed Analysis</h3>
          <textarea
            className="w-full h-60 p-4 rounded-lg bg-[#121212] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            readOnly
            value={`• Production has increased by 12% compared to the previous quarter.\n
            • Average cost per unit has decreased by 4% indicating improved efficiency.\n
            • Waste levels are dropping steadily due to better resource allocation.\n
            • You can further reduce cost by optimizing energy consumption during peak hours.`}
          />
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;
