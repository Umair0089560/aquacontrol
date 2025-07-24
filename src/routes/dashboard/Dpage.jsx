import React from "react";
import FilterGauge from "./FilterGauge"
import WaterFlowChart from "./WaterFlowChart";
import SensorPanel from "./SensorPanel";


export default function Dashboard() {
  return (
    <div className="text-white p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">

      <div className="xl:col-span-2">

        <FilterGauge />
        <div className="bg-[#0B1830] hidden md:block rounded p-5 mt-6">
          <WaterFlowChart />
        </div>
      </div>


      <div className="space-y-6">



        <h3 className="font-semibold mt-[16px]">Status</h3>

        <div className="bg-[#0B1830] rounded p-5 mt-5 w-full" style={{ height: "148.85px" }}>
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


        <SensorPanel />


        <div className="bg-[#0B1830] rounded p-5 h-[440px] text-white">
          <h3 className="text-center text-[#FFFFFF] text-[18px] font-[400] mb-4">Tank level</h3>

          <div className="relative flex justify-center items-center h-[300px]">

            <div className="absolute md:left-[40px] left-[5px] top-[50px] transform -translate-y-1/2 text-gray-400 text-[13px] font-[400] flex items-center gap-1">
              <span>5 kbm</span>
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-l-gray-400 border-t-transparent border-b-transparent"></div>
            </div>


            <div className="grid grid-rows-20 rounded-xl w-[120px] h-full">
              {[...Array(26)].map((_, i) => {
                let colorClass = "";
                if (i < 14) colorClass = "bg-[#00D1FF]";
                else if (i < 20) colorClass = "bg-[#C2E823]";
                else if (i < 23) colorClass = "bg-[#FEA9C1]";
                else colorClass = "bg-[#FF3C5F]";


                return (
                  <div
                    key={i}
                    className={`rounded-xl h-[6px] ${colorClass}`}
                  />
                );
              })}
            </div>
          </div>


          <p className="mt-4 mb-5 text-center text-2xl font-bold text-[#00D1FF]">70%</p>
        </div>
        <div className="bg-[#0B1830] md:hidden block rounded p-5 mt-6">
          <WaterFlowChart />
        </div>
      </div>
    </div>
  );
}
