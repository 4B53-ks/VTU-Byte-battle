import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightCircle } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-5 shadow-md bg-[#111]">
        <h1 className="text-2xl font-bold tracking-wide">Smart CostCalc</h1>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full"
        >
          Login / Sign Up
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 sm:py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Revolutionize Production with Smart Cost Optimization
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Our Smart Production Cost Calculator helps you track, analyze, and minimize production expenses using intelligent breakdowns, visual insights, and real-time analytics.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-green-600 hover:bg-green-500 px-6 py-3 text-lg rounded-full"
        >
          Explore Dashboard <ArrowRightCircle className="ml-2 inline-block" size={20} />
        </button>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-[#181818]">
        <h3 className="text-3xl font-semibold text-center mb-12">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#222] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-3">Interactive Cost Calculator</h4>
            <p className="text-gray-400 text-sm">
              Input dynamic values like raw material, labor, and transport cost and instantly see a detailed cost breakdown.
            </p>
          </div>

          <div className="bg-[#222] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-3">Visual Insights</h4>
            <p className="text-gray-400 text-sm">
              View intuitive pie charts and graphs to better understand how each cost component impacts your total spend.
            </p>
          </div>

          <div className="bg-[#222] p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h4 className="text-xl font-bold mb-3">Real-Time Optimization</h4>
            <p className="text-gray-400 text-sm">
              Get instant feedback and suggestions for reducing costs based on entered values.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-8 py-16">
        <h3 className="text-3xl font-semibold text-center mb-12">Use Cases</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-[#1e1e1e] p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Startups & MSMEs</h4>
            <p className="text-gray-400 text-sm">
              Control production costs in early phases and avoid budget overruns with clear insights.
            </p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-2">Manufacturing Units</h4>
            <p className="text-gray-400 text-sm">
              Monitor batch production costs and increase efficiency with data-driven decision making.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center px-6 py-20 bg-[#141414]">
        <h3 className="text-3xl font-bold mb-4">Ready to take control of your production costs?</h3>
        <p className="text-gray-300 mb-6">Sign up now to start optimizing your production expenses with Smart CostCalc!</p>
        <button
          onClick={() => navigate("/login")}
          className="bg-green-600 hover:bg-green-500 text-lg px-6 py-3 rounded-full"
        >
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Smart CostCalc. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
