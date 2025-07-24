import { Droplets, Gauge, Waves, AlignVerticalJustifyStart, MountainSnow } from "lucide-react";

const sensors = [
  { label: "Water flow in", status: "connected", icon: <Waves size={18} /> },
  { label: "Water value in", status: "connected", icon: <AlignVerticalJustifyStart size={18} /> },
  { label: "Water flow out", status: "disconnected", icon: <Waves size={18} /> },
  { label: "Pressure in", status: "connected", icon: <Gauge size={18} /> },
  { label: "Pressure after coarse filter", status: "connected", icon: <Gauge size={18} /> },
  { label: "Tank level", status: "connected", icon: <MountainSnow size={18} /> },
  { label: "Water value out", status: "disconnected", icon: <AlignVerticalJustifyStart size={18} /> },
];

export default function SensorPanel() {
  return (
    <div className="bg-[#0B1830] rounded-xl p-5 w-full text-white">
      <h3 className="font-semibold text-sm mb-4">Sensors</h3>

    
      <div className="flex items-center gap-4 mb-4 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#00D1FF] inline-block" />
          Connected
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <span className="w-2 h-2 rounded-full bg-gray-400 inline-block" />
          Disconnected
        </div>
      </div>

     
      <div className="grid grid-cols-2 gap-3 text-xs">
        {sensors.map((sensor) => (
          <button
            key={sensor.label}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded border transition-all ${
              sensor.status === "connected"
                ? "border-[#00D1FF] text-[#00D1FF]"
                : "border-gray-500 text-gray-500"
            }`}
          >
            {sensor.icon}
            <span className="text-left leading-tight">{sensor.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
