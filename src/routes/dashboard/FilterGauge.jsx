

import React, { useRef, useEffect } from "react";

const GaugeCanvas = ({ value = 0 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height * 0.9;
    const radius = 120;

    ctx.clearRect(0, 0, width, height);

    // Draw colored arc dots
    for (let i = 0; i < 36; i++) {
      const angle = (Math.PI * i) / 35;
      const x = centerX + radius * Math.cos(Math.PI - angle);
      const y = centerY - radius * Math.sin(Math.PI - angle);

      let color;
      if (i < 12) color = "#00D1FF"; // blue
      else if (i < 24) color = "#D6D900"; // yellow
      else color = "#FF3C5F"; // red

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // ✅ Needle logic using absolute triangle coords
    const angle = (Math.PI * value) / 6; // value 0–6 mapped to angle 0–PI

    // Tip of needle
    const tipX = centerX + 74 * Math.cos(Math.PI - angle);
    const tipY = centerY - 74 * Math.sin(Math.PI - angle);

    // Base left and right
    const baseLeftX = centerX + 5 * Math.cos(Math.PI - angle + Math.PI / 2);
    const baseLeftY = centerY - 5 * Math.sin(Math.PI - angle + Math.PI / 2);

    const baseRightX = centerX + 5 * Math.cos(Math.PI - angle - Math.PI / 2);
    const baseRightY = centerY - 5 * Math.sin(Math.PI - angle - Math.PI / 2);

    // Draw triangle needle
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(baseLeftX, baseLeftY);
    ctx.lineTo(baseRightX, baseRightY);
    ctx.closePath();
    ctx.fillStyle = "#e8e8ea";
    ctx.fill();

    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
    ctx.fillStyle = "#e8e8ea";
    ctx.fill();
  }, [value]);

  return <canvas ref={canvasRef} width={344} height={155} />;
};


const FilterGauge = ({ title, value }) => {
  return (
  <div className="bg-[#0B1830] p-4 sm:p-2 rounded flex flex-col items-center">
  <div className="text-white text-[18px] font-[400] font-semibold text-lg sm:text-base mb-2 sm:mb-1 text-center">
    {title}
  </div>

  <div className="w-full flex  justify-center items-center">
    <GaugeCanvas value={value} />
  </div>

  <div className="text-white sm:text-xl mt-2 sm:mt-1">
    {value}
  </div>

  <div className="mt-2 sm:mt-1 text-center">
    <div className="text-[#9DA3AC] text-[11px] sm:text-[10px] leading-tight">
      FILTER INSPECTION 5,0
    </div>
    <div className="text-[#9DA3AC] text-[11px] sm:text-[10px] leading-tight">
      PROBABLE FILTER CHANGE &gt; 1.0
    </div>
  </div>
</div>

  );
};

export default function FilterOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="col-span-1 md:col-span-2 text-[18px] font-[400] text-white px-4 py-2 rounded">
        Filter Overview
      </div>

      <FilterGauge title="Coarse filter" value={0.2} />
      <FilterGauge title="Fine filter" value={4.2} />
    </div>
  );
}








