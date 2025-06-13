// CostForm.jsx
import React, { useState } from "react";
import {
  DollarSign,
  Hourglass,
  Hammer,
  Briefcase,
  PlusCircle,
  Trash2
} from "lucide-react";

const CostForm = () => {
  const [costs, setCosts] = useState({
    rawMaterials: [{ id: 1, description: "", amount: "" }],
    labor: [{ id: 1, hours: "", rate: "" }],
    overheads: [{ id: 1, description: "", amount: "" }],
    misc: [{ id: 1, description: "", amount: "" }]
  });

  const handleChange = (category, index, e) => {
    const { name, value } = e.target;
    if (["amount", "hours", "rate"].includes(name) && value !== "" && !/^\d*\.?\d*$/.test(value)) {
      return;
    }
    const updatedItems = [...costs[category]];
    updatedItems[index] = { ...updatedItems[index], [name]: value };
    setCosts({ ...costs, [category]: updatedItems });
  };

  const handleAddItem = (category) => {
    const newId = Date.now();
    const newItem =
      category === "labor"
        ? { id: newId, hours: "", rate: "" }
        : { id: newId, description: "", amount: "" };
    setCosts({ ...costs, [category]: [...costs[category], newItem] });
  };

  const handleRemoveItem = (category, index) => {
    const updatedItems = costs[category].filter((_, i) => i !== index);
    setCosts({ ...costs, [category]: updatedItems });
  };

  const parseAmount = (val) => {
    const parsed = parseFloat(val);
    return isNaN(parsed) ? 0 : parsed;
  };

  const totalRawMaterials = costs.rawMaterials.reduce((acc, item) => acc + parseAmount(item.amount), 0);
  const totalLabor = costs.labor.reduce((acc, item) => acc + (parseAmount(item.hours) * parseAmount(item.rate)), 0);
  const totalOverheads = costs.overheads.reduce((acc, item) => acc + parseAmount(item.amount), 0);
  const totalMisc = costs.misc.reduce((acc, item) => acc + parseAmount(item.amount), 0);
  const totalCost = totalRawMaterials + totalLabor + totalOverheads + totalMisc;

  return (
    <div className="space-y-6">
      {/* Section Component */}
      {[
        { key: "rawMaterials", title: "Raw Materials Cost", icon: <DollarSign className="w-5 h-5 mr-2 text-green-400" /> },
        { key: "labor", title: "Labor Costs", icon: <Hammer className="w-5 h-5 mr-2 text-green-400" /> },
        { key: "overheads", title: "Overhead Costs", icon: <Briefcase className="w-5 h-5 mr-2 text-green-400" /> },
        { key: "misc", title: "Miscellaneous Costs", icon: <PlusCircle className="w-5 h-5 mr-2 text-green-400" /> }
      ].map(({ key, title, icon }) => (
        <div key={key} className="bg-gray-700 p-5 rounded-lg shadow-inner border border-gray-600">
          <h3 className="text-xl font-semibold text-gray-100 mb-4 flex items-center">{icon}{title}</h3>
          <div className="space-y-3">
            {costs[key].map((item, index) => (
              <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                {key === "labor" ? (
                  <>
                    <div className="relative sm:col-span-5">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Hourglass className="h-5 w-5 text-gray-400" /></div>
                      <input
                        name="hours"
                        type="text"
                        placeholder="Hours"
                        inputMode="numeric"
                        pattern="[0-9]*[.,]?[0-9]*"
                        value={item.hours}
                        onChange={(e) => handleChange(key, index, e)}
                        className="w-full p-3 pl-10 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div className="relative sm:col-span-5">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><DollarSign className="h-5 w-5 text-gray-400" /></div>
                      <input
                        name="rate"
                        type="text"
                        placeholder="Rate per Hour"
                        inputMode="numeric"
                        pattern="[0-9]*[.,]?[0-9]*"
                        value={item.rate}
                        onChange={(e) => handleChange(key, index, e)}
                        className="w-full p-3 pl-10 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveItem(key, index)}
                      className="sm:col-span-2 text-red-500 hover:text-red-400 p-2 rounded-md flex justify-center items-center"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      name="description"
                      type="text"
                      placeholder={`${key === "misc" ? "Misc. Expense" : key.charAt(0).toUpperCase() + key.slice(1)} ${index + 1}`}
                      value={item.description}
                      onChange={(e) => handleChange(key, index, e)}
                      className="sm:col-span-7 w-full p-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      name="amount"
                      type="text"
                      placeholder="Amount"
                      inputMode="numeric"
                      pattern="[0-9]*[.,]?[0-9]*"
                      value={item.amount}
                      onChange={(e) => handleChange(key, index, e)}
                      className="sm:col-span-4 w-full p-3 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      onClick={() => handleRemoveItem(key, index)}
                      className="sm:col-span-1 text-red-500 hover:text-red-400 p-2 rounded-md flex justify-center items-center"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleAddItem(key)}
            className="mt-4 inline-flex items-center text-green-400 hover:text-green-300"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Add {key === "labor" ? "Labor Entry" : key === "rawMaterials" ? "Material" : key === "overheads" ? "Overhead" : "Misc. Expense"}
          </button>
        </div>
      ))}

      {/* Total Display */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-2xl border border-green-400 text-center animate-pulse-subtle">
        <h3 className="text-xl font-extrabold text-white mb-2">Grand Total Estimated Cost</h3>
        <div className="text-5xl font-bold text-white tracking-tight">
          ₹ {totalCost.toFixed(2)}
        </div>
        <p className="text-green-100 text-sm mt-2 opacity-90">
          This calculation includes all itemized costs from every category.
        </p>
      </div>
    </div>
  );
};

export default CostForm;
