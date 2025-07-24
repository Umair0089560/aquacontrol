

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


  for (let i = 0; i < 36; i++) {
    const angle = (Math.PI * i) / 35;
    const hue = Math.floor((i / 35) * 120);
    const x = centerX + radius * Math.cos(Math.PI - angle);
    const y = centerY - radius * Math.sin(Math.PI - angle);

    ctx.beginPath();
    ctx.arc(x, y, 3, 0, 2 * Math.PI);
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.fill();
  }

  
  const needleAngle = (Math.PI * value) / 5; 
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-needleAngle); 
  
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.lineTo(-74, -5);
  ctx.lineTo(0, -15);
  ctx.closePath();
  ctx.fillStyle = "#e8e8ea";
  ctx.fill();

  
  ctx.beginPath();
  ctx.arc(0, -5, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#e8e8ea";
  ctx.fill();

  ctx.restore();
}, [value]);


  return <canvas ref={canvasRef} width={344} height={155} />;
};

const FilterGauge = ({ title, value }) => {
  return (
  <div className="bg-[#0B1830] p-4 sm:p-2 rounded flex flex-col items-center">
  <div className="text-white font-semibold text-lg sm:text-base mb-2 sm:mb-1 text-center">
    {title}
  </div>

  <div className="w-full flex  justify-center items-center">
    <GaugeCanvas value={value} />
  </div>

  <div className="text-white text-2xl sm:text-xl mt-2 sm:mt-1">
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
      <FilterGauge title="Fine filter" value={0.2} />
    </div>
  );
}





