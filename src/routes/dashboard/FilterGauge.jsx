"use client";

import React from "react";

const FilterGauge = ({ title, value }) => {
  return (
    <div className="bg-[#0B1830] p-4 rounded flex flex-col items-center">
      <div className="text-white font-semibold text-lg mb-2">{title}</div>

      {/* Full SVG gauge */}
      <div className="w-full flex justify-center items-center">
        <svg
          width="344"
          height="155"
          viewBox="0 0 344 155"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(48, 8)">
            <g transform="translate(124, 124)">
            
              {[...Array(36)].map((_, i) => {
                const hue = Math.floor((i / 36) * 120);
                const angle = (i * 180) / 36;
                const x = 120 * Math.cos((angle * Math.PI) / 180);
                const y = 120 * Math.sin((angle * Math.PI) / 180);
                return (
                  <circle
                    key={i}
                    r={3}
                    cx={x}
                    cy={-y}
                    fill={`hsl(${hue}, 100%, 50%)`}
                  />
                );
              })}

            
              <g transform="translate(0, 0)">
                <path
                  d="M 0 5 L -68 -5 L 0 -15"
                  fill="#e8e8ea"
                />
                <circle cx="0" cy="-5" r="9" fill="#e8e8ea" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="text-white text-2xl mt-2">{value}</div>

      <div className="mt-2 text-center">
        <div className="text-[#9DA3AC] text-[11px]">FILTER INSPECTION 5,0</div>
        <div className="text-[#9DA3AC] text-[11px]">
          PROBABLE FILTER CHANGE &gt; 1.0
        </div>
      </div>
    </div>
  );
};

export default function FilterOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="col-span-1 md:col-span-2 text-xl font-semibold text-white px-4 py-2 rounded">
        Filter Overview
      </div>

      <FilterGauge title="Coarse filter" value={0.2} />
      <FilterGauge title="Fine filter" value={4.2} />
    </div>
  );
}
