"use client";
import React, { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

const PricingCard = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Lite",
      monthly: 40,
      yearly: 480,
    },
    {
      name: "Basic",
      monthly: 399,
      yearly: 4788,
    },
    {
      name: "Plus",
      monthly: 589,
      yearly: 7068,
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-12">

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold font-sans text-amber-50">
          Simple and Affordable Pricing
        </h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          corrupti quis quae autem. Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>

  
      <div className="flex justify-center items-center mt-8 gap-3">
        <span
          className={`text-base sm:text-lg font-bold ${
            !isYearly ? "text-blue-600" : "text-gray-300"
          }`}
        >
          Monthly
        </span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span
          className={`text-base sm:text-lg font-bold ${
            isYearly ? "text-blue-600" : "text-gray-300"
          }`}
        >
          Yearly
        </span>
      </div>

  
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="border border-gray-800 bg-gray-900 rounded-xl shadow-sm hover:shadow-lg transition"
          >
      
            <div className="p-6 border-b border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-3xl font-bold text-white tracking-tight">
                    ${isYearly ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-sm font-medium text-slate-400">
                    {isYearly ? " /yr" : " /mo"}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-white">{plan.name}</h2>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                For new makers who want to fine-tune and test an idea.
              </p>
              <a
                href="/sign-up"
                className="mt-6 block w-full bg-blue-800 py-2 text-sm font-semibold text-white text-center rounded hover:bg-blue-700 transition"
              >
                Start Free Trial
              </a>
            </div>

          
            <div className="pt-6 pb-8 px-6">
              <ul role="list" className="space-y-3 text-sm">
                {[
                  "1 landing page included",
                  "1,000 visits/mo",
                  "Access to all UI blocks",
                  "50 conversion actions included",
                  "5% payment commission",
                  "Real-time analytics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <FaCheckSquare className="text-blue-500" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
