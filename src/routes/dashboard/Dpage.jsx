import React from "react";
import FilterGauge from "./FilterGauge"
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const waterFlowData = [
  { name: "JAN", inflow: 800, outflow: 400, reject: 200 },
  { name: "FEB", inflow: 1200, outflow: 600, reject: 300 },
  { name: "MAR", inflow: 1500, outflow: 700, reject: 400 },
  { name: "APR", inflow: 900, outflow: 500, reject: 250 },
  { name: "MAY", inflow: 1300, outflow: 800, reject: 350 },
  { name: "JUN", inflow: 1600, outflow: 900, reject: 450 },
];

export default function Dashboard() {
  return (
    <div className="text-white p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* Filter overview */}
      <div className="xl:col-span-2">
       
            <FilterGauge />
        {/* Water flow */}
        <div className="bg-[#0B1830] rounded p-5 mt-6">
          <div className="flex justify-between mb-5 items-center">
            <div className="space-x-4 text-sm font-medium">
              <button className="text-[#00D1FF] border-b-2 border-[#00D1FF] pb-1">Water flow in</button>
              <button className="text-gray-400">Water flow out</button>
              <button className="text-gray-400">Reject water</button>
            </div>
            <select className="bg-[#0A1529] border border-[#2C3A58] text-sm rounded px-2 py-1 focus:outline-none">
              <option>Month</option>
              <option>Week</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={waterFlowData} margin={{ left: -12 }}>
              <XAxis dataKey="name" stroke="#aaa" tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: "#111F3A", border: "none", color: "#fff" }} />
              <Bar dataKey="inflow" fill="#00D1FF" barSize={14} radius={[4, 4, 0, 0]} />
              {/* Add other Bars if needed */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right sidebar */}
      <div className="space-y-6">


        {/* Status */}
          <h3 className="font-semibold mt-[16px]">Status</h3>

        <div className="bg-[#0B1830] rounded p-5 mt-5" style={{width: "344.14px", height: "148.85px"}}>
          <div className="grid grid-cols-2 gap-y-3 gap-x-5 text-[11px]">
            {[
              { label: "Coarse filter", color: "#00D1FF" },
              { label: "Fine filter", color: "#FFE600" },
              { label: "Intake", color: "#6BE6E6" },
              { label: "Operation", color: "#00E37A" },
              { label: "Tank level", color: "#FF3C5F" },
              { label: "Water prod.", color: "#6C63FF" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sensors */}
        <div className="bg-[#0B1830] rounded-xl p-5">
          <h3 className="font-semibold mb-4">Sensors</h3>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {[
              { label: "Water flow in", status: "connected" },
              { label: "Water flow out", status: "disconnected" },
              { label: "Water value in", status: "connected" },
              { label: "Water value out", status: "disconnected" },
              { label: "Pressure in", status: "connected" },
              { label: "Pressure after coarse filter", status: "disconnected" },
              { label: "Tank level", status: "connected" },
            ].map((sensor) => (
              <button
                key={sensor.label}
                className={`w-full flex items-center justify-center px-2 py-1 rounded border ${
                  sensor.status === "connected"
                    ? "border-[#00D1FF] text-[#00D1FF]"
                    : "border-gray-500 text-gray-500"
                }`}
              >
                {sensor.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tank level */}
        <div className="bg-[#0B1830] rounded-xl p-5">
          <h3 className="font-semibold mb-4">Tank level</h3>
          <div className="relative h-36 w-full bg-[#1E2A47] rounded-lg">
            <div className="absolute bottom-0 w-full h-[70%] grid grid-rows-20 gap-[2px] p-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`w-full rounded-sm ${
                    i < 14
                      ? "bg-[#00D1FF]"
                      : i < 16
                      ? "bg-[#FFE600]"
                      : i < 18
                      ? "bg-[#FF3C5F]"
                      : "bg-[#2A3C5D]"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="mt-3 text-center text-xl font-semibold text-[#00D1FF]">70%</p>
        </div>
      </div>
    </div>
  );
}
