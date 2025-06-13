import React from "react";
import SideBar from "../components/SideBar";
import CostForm from "../components/CostForm";
import CostBreakdown from "../components/CostBreakdown";
import Insights from "../components/Insights";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex">
      <SideBar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Smart Production Cost Calculator</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CostForm />
          <CostBreakdown />
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
