"use client";

import React, { useState } from "react";
import { ArrowRight, RefreshCw } from "lucide-react";

export default function Component() {
  const [activeColor, setActiveColor] = useState<"black" | "white" | null>(
    null
  );

  const handleClick = (color: "black" | "white") => {
    setActiveColor(color);
  };

  const resetState = () => {
    setActiveColor(null);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-neutral-950 p-8 border-4 border-gray-300 dark:border-neutral-800 rounded-lg my-8">
      <h1 className="text-2xl font-bold mb-6 text-center title">
        Who Has the Power in a {activeColor ? "51-49" : "49-49-2"} Split?
      </h1>
      <div className="relative w-64 h-64 my-4">
        <div
          className={`absolute inset-0 bg-black dark:bg-white  rounded-full cursor-pointer ${
            activeColor === "black"
              ? "opacity-100"
              : "opacity-80 hover:opacity-100"
          }`}
          onClick={() => handleClick("black")}
        ></div>
        <div
          className={`absolute inset-0 bg-white dark:bg-black rounded-full cursor-pointer ${
            activeColor === "white"
              ? "opacity-100"
              : "opacity-80 hover:opacity-100"
          }`}
          style={{
            clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)",
          }}
          onClick={() => handleClick("white")}
        ></div>
        <div
          className={`absolute top-1/2 left-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
            activeColor ? `bg-${activeColor}` : "bg-[#FF6600]"
          }`}
        ></div>
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white dark:text-black font-bold">
          {activeColor === "black" ? "51%" : "49%"}
        </div>
        <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-black dark:text-white font-bold">
          {activeColor === "white" ? "51%" : "49%"}
        </div>
        {!activeColor && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xs">
            2%
          </div>
        )}
      </div>
      <div className="space-y-4 max-w-md text-center">
        {activeColor ? (
          <>
            <p className="font-semibold">
              The {activeColor === "black" ? "black" : "white"} shareholders now
              hold the majority
            </p>
          </>
        ) : (
          <>
            <p className="font-semibold">
              The 2% shareholder holds the balance of power
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-bold text-[#FF6600]">2%</span>
              <ArrowRight className="h-4 w-4" />
              <span>Chooses the leader</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-bold text-[#FF6600]">2%</span>
              <ArrowRight className="h-4 w-4" />
              <span>Can align with either 49% to form majority</span>
            </div>
            <p className="italic">
              Despite owning the smallest share, the 2% stakeholder wields
              significant influence in decision-making.
            </p>
          </>
        )}
      </div>
      {activeColor && (
        <button
          onClick={resetState}
          className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded flex items-center"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Reset
        </button>
      )}
    </div>
  );
}
