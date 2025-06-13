import React from "react";
import { PieChart, TrendingUp, Activity, BarChart2 } from "lucide-react";
import SideBar from "./SideBar";

const insights = [
    {
        title: "Total Productions",
        value: "1,245",
        icon: <Activity size={20} />,
        color: "bg-blue-600/10 text-blue-400",
    },
    {
        title: "Average Cost",
        value: "₹7,530",
        icon: <BarChart2 size={20} />,
        color: "bg-green-600/10 text-green-400",
    },
    {
        title: "Cost Efficiency",
        value: "86%",
        icon: <TrendingUp size={20} />,
        color: "bg-yellow-600/10 text-yellow-400",
    },
    {
        title: "Waste Reduction",
        value: "12%",
        icon: <PieChart size={20} />,
        color: "bg-purple-600/10 text-purple-400",
    },
];

const Insights = () => {
    return (
        <div className="min-h-screen bg-[#121212] text-white flex">
            {/* Sidebar on the left */}
            <SideBar />

            {/* Main content on the right */}
            <main className="flex-1 overflow-x-hidden">
                <div className="p-6 sm:p-8 max-w-7xl mx-auto">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-1">Dashboard Overview</h2>
                        <p className="text-sm text-gray-400">
                            Get a quick overview of production performance and cost analysis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {insights.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#1f1f1f] p-4 rounded-2xl shadow-md hover:shadow-lg transition"
                            >
                                <div className={`p-2 rounded-md inline-flex ${item.color} mb-2`}>
                                    {item.icon}
                                </div>
                                <p className="text-gray-400 text-sm">{item.title}</p>
                                <h3 className="text-xl font-semibold text-white">{item.value}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#1f1f1f] p-6 rounded-2xl shadow-md">
                        <h3 className="text-lg font-semibold text-white mb-4">Insights Summary</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            This dashboard provides you with insights into your production cost efficiency,
                            average expenses, and opportunities for optimization. Use this information
                            to improve budgeting and reduce material waste. Visual graphs and real-time
                            data analytics can also be integrated here using Recharts or D3.js.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Insights;
