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
    <div>
      <div className="flex justify-center items-center flex-col mt-8">
        <h1 className="text-3xl font-bold font-sans text-amber-50">
          Simple and Affordable Pricing
        </h1>
        <p className="text-gray-400 text-center w-1/2 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          corrupti quis quae autem,Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptatum
        </p>
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center items-center flex-row mt-8 gap-2">
        <span
          className={`text-xl font-bold font-sans ${
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
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
        <span
          className={`text-xl font-bold font-sans ${
            isYearly ? "text-blue-600" : "text-gray-300"
          }`}
        >
          Yearly
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="w-full py-10">
        <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="border border-gray-900 bg-gray-900">
              <div className="p-6 border border-b-gray-500">
                <div className="flex justify-between items-center">
                  <p>
                    <span className="text-4xl font-bold text-gray-100 tracking-tight">
                      ${isYearly ? plan.yearly : plan.monthly}
                    </span>
                    <span className="text-base font-medium text-slate-500">
                      {isYearly ? " /yr" : " /mo"}
                    </span>
                  </p>
                  <h2 className="flex justify-center text-xl text-center items-center font-bold text-gray-100">
                    {plan.name}
                  </h2>
                </div>
                <p className="mt-2 text-base text-gray-400 leading-tight">
                  For new makers who want to fine-tune and test an idea.
                </p>

                <a
                  href="/sign-up"
                  className="mt-8 block w-full bg-blue-800 py-2 text-sm font-semibold text-white text-center hover:bg-slate-800 transition"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="pt-6 pb-8 px-6">
                <ul role="list" className="mt-4 space-y-3">
                  {[
                    "1 landing page included",
                    "1,000 visits/mo",
                    "Access to all UI blocks",
                    "50 conversion actions included",
                    "5% payment commission",
                    "Real-time analytics",
                  ].map((item, i) => (
                    <li key={i} className="flex space-x-3">
                      <FaCheckSquare className="text-blue-500" />
                      <span className="text-base text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
