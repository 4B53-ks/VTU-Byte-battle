import React, { useState } from "react";
import SideBar from "../components/SideBar";
import { DollarSign, Hammer, Briefcase, PlusCircle } from "lucide-react";

const Templates = () => {
  const [hoveredBlock, setHoveredBlock] = useState(null);

  const data = {
    rawMaterials: [
      { id: 1, description: "Steel Beams", amount: "4500" },
      { id: 2, description: "Concrete Mix", amount: "3200" },
      { id: 3, description: "Wiring and Insulation", amount: "1500" },
    ],
    labor: [
      { id: 1, hours: "80", rate: "30" },
      { id: 2, hours: "50", rate: "45" },
    ],
    overheads: [
      { id: 1, description: "Site Rent", amount: "2000" },
      { id: 2, description: "Heavy Equipment Rental", amount: "1800" },
    ],
    misc: [
      { id: 1, description: "Permits and Fees", amount: "750" },
      { id: 2, description: "Safety Gear", amount: "400" },
    ],
  };

  const totalRawMaterials = data.rawMaterials.reduce(
    (acc, item) => acc + (parseFloat(item.amount) || 0),
    0
  );
  const totalLabor = data.labor.reduce(
    (acc, item) =>
      acc + (parseFloat(item.hours || 0) * parseFloat(item.rate || 0)),
    0
  );
  const totalOverheads = data.overheads.reduce(
    (acc, item) => acc + (parseFloat(item.amount) || 0),
    0
  );
  const totalMisc = data.misc.reduce(
    (acc, item) => acc + (parseFloat(item.amount) || 0),
    0
  );
  const grandTotal =
    totalRawMaterials + totalLabor + totalOverheads + totalMisc;

  const renderDetails = (category) => {
    const categoryData = data[category];
    if (!categoryData || hoveredBlock !== category) return null;

    return (
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-10 p-4 rounded-lg flex flex-col animate-fade-in">
        <h4 className="text-lg font-bold text-green-400 mb-3 border-b border-gray-600 pb-2">
          Details
        </h4>
        <div className="flex-grow overflow-y-auto pr-2">
          {category === "labor"
            ? categoryData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm mb-2"
                >
                  <span className="text-gray-300">{`Task (${item.hours} hrs @ ₹${item.rate}/hr)`}</span>
                  <span className="font-medium text-gray-100">
                    ₹{(item.hours * item.rate).toFixed(2)}
                  </span>
                </div>
              ))
            : categoryData.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm mb-2"
                >
                  <span className="text-gray-300">
                    {item.description || "Item"}
                  </span>
                  <span className="font-medium text-gray-100">
                    ₹{parseFloat(item.amount).toFixed(2)}
                  </span>
                </div>
              ))}
        </div>
      </div>
    );
  };

  const renderCostBlock = (title, category, totalAmount, IconComponent) => {
    const percentage = grandTotal > 0 ? (totalAmount / grandTotal) * 100 : 0;

    return (
      <div
        className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-green-500"
        onMouseEnter={() => setHoveredBlock(category)}
        onMouseLeave={() => setHoveredBlock(null)}
      >
        <div className="flex items-center text-2xl font-bold text-white mb-2">
          <IconComponent className="w-6 h-6 mr-3 text-green-400" />
          {title}
        </div>
        <p className="text-4xl font-extrabold text-white mb-4">
          ₹{totalAmount.toFixed(2)}
        </p>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-400 mt-2">
          {percentage.toFixed(1)}% of Total
        </p>
        {renderDetails(category)}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Dashboard */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-green-400">
          Cost Breakdown Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {renderCostBlock("Raw Materials", "rawMaterials", totalRawMaterials, DollarSign)}
          {renderCostBlock("Labor Costs", "labor", totalLabor, Hammer)}
          {renderCostBlock("Overhead Costs", "overheads", totalOverheads, Briefcase)}
          {renderCostBlock("Miscellaneous", "misc", totalMisc, PlusCircle)}
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-600 to-teal-700 p-6 rounded-xl shadow-2xl text-center">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">
            Grand Total
          </h3>
          <div className="text-6xl font-extrabold text-white mt-2">
            ₹{grandTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
