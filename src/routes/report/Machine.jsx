import React, { useState } from 'react';

import MachineFlowTable from './MachineFlowTable';
import MachineFlowChart from './MachineFlowChart';

function Machine() {
 const [isOn, setIsOn] = useState(true);
  const recent24h = "10,5";
  const custom = "12,7";
  return (
    <div className="text-white grid grid-cols-1 xl:grid-cols-3 gap-6">

      <div className="xl:col-span-2">
        <div className="bg-[#0B1830] rounded p-5 mt-6 mb-5">
          <MachineFlowChart />
        </div>

          <div className="mt-5">

          <MachineFlowTable/>
          </div>


      </div>




      <div className="bg-[#0B1830] rounded p-6 mt-6 w-full max-w-xs text-center space-y-6" style={{ height: "480px" }}>

         <div className="text-white py-6 flex flex-col items-center">
      <div className="text-center text-base font-medium mb-4">Current</div>

      <label className="flex items-center gap-4">
        <span className={`text-sm font-semibold ${!isOn ? 'text-gray-400' : 'text-gray-600'}`}>
          OFF
        </span>

        <div
          className={`w-14 h-8 flex items-center rounded-full px-1 cursor-pointer transition-colors duration-300 ${
            isOn ? 'bg-[#2B3A55]' : 'bg-gray-600'
          }`}
          onClick={() => setIsOn(!isOn)}
        >
          <div
            className={`bg-[#17E3F3] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              isOn ? 'translate-x-6' : ''
            }`}
          />
        </div>

        <span className={`text-sm font-semibold ${isOn ? 'text-cyan-400' : 'text-gray-600'}`}>
          ON
        </span>
      </label>
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

export default Machine