import { useState } from "react";

const facilities = [
  {
    name: "Alön",
    tag: "Alon",
    color: "border-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    name: "Timraån",
    tag: "Timraon",
    color: "border-pink-500",
    dot: "bg-pink-500",
  },
  {
    name: "Borgön",
    tag: "Borgon",
    color: "border-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    name: "Brf Mullvaden",
    tag: "Brf Mullvaden",
    color: "border-lime-400",
    dot: "bg-lime-400",
  },
  {
    name: "Huarö",
    tag: "Huaro",
    color: "border-cyan-400",
    dot: "bg-cyan-400",
  },
  {
    name: "Kompishuset",
    tag: "Kompishuset",
    color: "border-lime-400",
    dot: "bg-lime-400",
  },
];

export default function Moniter() {
  const [selectedWarning, setSelectedWarning] = useState("all");

  const warningTabs = [
    { name: "Timraån", tag: "Timraon", color: "border-pink-500", dot: "bg-pink-500" },
    { name: "Brf Mullvaden", tag: "Brf Mullvaden", color: "border-lime-400", dot: "bg-lime-400" },
    { name: "Kompishuset", tag: "Kompishuset", color: "border-lime-400", dot: "bg-lime-400" },
  ];

  const filteredFacilities =
    selectedWarning === "all"
      ? facilities
      : facilities.filter((f) => f.tag === selectedWarning);

  return (
    <div className="text-white min-h-screen p-6">
      <div>
        <h2 className="text-base font-semibold mb-3">Warnings</h2>
        <div className="flex gap-3 flex-wrap mb-8">
          {warningTabs.map((tab) => (
            <button
              key={tab.tag}
              
              onClick={() => setSelectedWarning(tab.tag)}
              className={`px-4 py-3 rounded w-[150px] border ${
                selectedWarning === tab.tag ? tab.color : "border-white/30"
              } flex items-center gap-2 text-sm`}
            >
              <span className={`w-3 h-3 rounded-full ${tab.dot}`}></span>
              {tab.name}
            </button>
          ))}
          <button
            onClick={() => setSelectedWarning("all")}
            className={`px-4 py-3 rounded border ${
              selectedWarning === "all" ? "border-white" : "border-white/30"
            } text-sm`}
          >
            All
          </button>
        </div>
      </div>

      <h2 className="text-base font-semibold mb-4">Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map((facility) => (
          <div
            key={facility.tag}
            className={`bg-[#06142b] rounded overflow-hidden shadow-md p-5`}
          >
            <div className={`flex items-center gap-2 px-4 py-2 bg-[#0f1a33] rounded-lg mt-4 mb-5 h-[52px] w-[280px] mx-auto border ${facility.color}`}>
              <span className={`w-3 h-3 rounded-full ${facility.dot}`}></span>
              <h3 className="text-sm font-medium">{facility.name}</h3>
            </div>

            <div className="px-4 py-3">
              <div className="flex justify-between">
           <div className="block">
  <div className="text-[11px] font-[400] mb-4 text-white/70">Filter</div>
  <div className="relative w-[160px] h-3 bg-white/10 rounded mb-5">
    <div className="absolute left-0 h-full w-[115px] bg-[#23CBD8] rounded"></div>
    <div className="absolute left-[110px] h-full w-[30px] bg-[#C2E823]"></div>
    <div className="absolute left-[140px] h-full w-[20px] bg-[#FC2965] rounded-r"></div>
    <div className="absolute left-[90px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white"></div>
  </div>

  <div className="text-[11px] font-[400] mb-4 text-white/70">Prod/day</div>
  <div className="relative w-[160px] h-3 bg-white/10 rounded">
    <div className="absolute left-0 h-full w-[20px] bg-[#FC2965] rounded-l"></div>
    <div className="absolute left-[20px] h-full w-[15px] bg-[#C2E823]"></div>
    <div className="absolute left-[35px] h-full w-[110px] bg-[#23CBD8]"></div>
    <div className="absolute left-[140px] h-full w-[20px] bg-[#FC2965] rounded-r"></div>
    <div className="absolute left-[54px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white"></div>
  </div>
</div>

             <div className="flex flex-col items-center text-white text-center">
  <span className="text-xs text-white/70 mb-2">Tank level</span>
  

  {/* <div className="w-0 h-0 absolute top-[431px]   border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-r-white mb-1"></div> */}

  <div className="flex flex-col justify-end gap-[2px] h-30 w-[40px]">
    {Array.from({ length: 20 }, (_, i) => {
      const level = 20 - i;
      const percentage = 70; 
      const isFilled = level <= percentage / 5; 

      const getColor = () => {
        if (level > 14) return 'bg-[#3BE0E0]';
        if (level > 10) return 'bg-cyan-300';
        if (level > 6) return 'bg-lime-300';
        if (level > 3) return 'bg-pink-200';
        return 'bg-pink-500';
      };

      return (
        <div
          key={i}
          className={`h-[4px] rounded ${isFilled ? getColor() : 'bg-white/10'}`}
        ></div>
      );
    })}
  </div>


  <div className="text-cyan-400 font-bold text-lg mt-2">70%</div>
</div>

</div>
              <div className="text-center mt-5">
                <button className="text-xs text-white/80 underline">More info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
