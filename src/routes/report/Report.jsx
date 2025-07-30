import React, {useState} from 'react'
import FlowTab from './FlowTab';
import Pressure from './Pressure';
import Quality from './Quality';
import TankLevel from './TankLevel';
import Machine from './Machine';
const tabs = [
  {
    label: "Flow",
    content: (
      <div>
      <FlowTab/>
      </div>
    ),
  },
  {
    label: "Pressure",
    content: (
      <div>
       <Pressure/>
      </div>
    ),
  },
  {
    label: "Quality",
    content: (
      <div>
        <Quality/>
      </div>
    ),
  },
  {
    label: "Machine",
    content: (
      <div>
       <Machine/>
      </div>
    ),
  },
  {
    label: "Tank level",
    content: (
      <div>
      <TankLevel/>
      </div>
    ),
  },
];

function Report() {
  const [activeTab, setActiveTab] = useState("Flow");

  return (

  <div className="p-5 min-h-[300px]">
      <div className="flex space-x-10 border-[#33415C]">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className="relative pb-3 md:w-[160px] w-[30px] flex justify-start"
          >
            <span
              className={`text-sm transition-colors duration-300 ${
                activeTab === tab.label
                  ? "text-white font-medium"
                  : "text-[#7C8DA6]"
              }`}
            >
              {tab.label}
            </span>
            <div
              className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300 ${
                activeTab === tab.label ? "bg-white" : "bg-[#33415C]"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="text-white mt-6">
        {tabs.find((t) => t.label === activeTab)?.content}
      </div>
    </div>
  )
}

export default Report



