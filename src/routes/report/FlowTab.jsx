import React from 'react'
import WaterFlowChart from "../dashboard/WaterFlowChart";
import FlowTable from './FlowTable';

function FlowTab() {
  const current = 20;
  const recent24h = "10,5";
  const custom = "12,7";
  return (
    <div className="text-white grid grid-cols-1 xl:grid-cols-3 gap-6">

      <div className="xl:col-span-2">
        <div className="bg-[#0B1830] rounded p-5 mt-6 mb-5">
          <WaterFlowChart />
        </div>

          <div className="mt-5">

          <FlowTable/>
          </div>


      </div>




      <div className="bg-[#0B1830] rounded p-6 mt-6 w-full max-w-xs text-center space-y-6" style={{ height: "480px" }}>

        <div>
          <div className="text-white text-[15px] mb-2 font-[400]">Current</div>
          <div className="border border-gray-600 rounded-lg py-2 w-[126px] mx-auto text-white text-[26px] font-[400]">
            {current}
          </div>
          <div className="text-gray-400 text-[15px] mt-1">l/min</div>
        </div>

        <hr className="border-gray-600" />

        <div>
          <div className="text-white text-[15px] font-[400] mb-2">Recent 24h</div>
          <div className="border border-gray-600 rounded-lg py-2 w-[126px] mx-auto text-white text-[26px] font-[400]">
            {recent24h}
          </div>
          <div className="text-gray-400 text-sm mt-1">kbm</div>
        </div>

        <hr className="border-gray-600" />


        <div>
          <div className="text-white text-[15px] mb-2 font-[400]">Customized time (in/out)</div>
          <div className="border border-gray-600 rounded-lg py-2 w-[126px] mx-auto text-white text-[26px] font-[400]">
            {custom}
          </div>
          <div className="text-gray-400 text-sm mt-1">kbm</div>
        </div>
      </div>

    </div>
  )
}

export default FlowTab