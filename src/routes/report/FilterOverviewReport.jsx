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
      const x = centerX + radius * Math.cos(Math.PI - angle);
      const y = centerY - radius * Math.sin(Math.PI - angle);

      let color;
      if (i < 12) color = "#00D1FF"; 
      else if (i < 24) color = "#D6D900"; 
      else color = "#FF3C5F";

      ctx.beginPath();
      ctx.arc(x, y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = color;
      ctx.fill();
    }

    
    const angle = (Math.PI * value) / 6; 


    const tipX = centerX + 74 * Math.cos(Math.PI - angle);
    const tipY = centerY - 74 * Math.sin(Math.PI - angle);


    const baseLeftX = centerX + 5 * Math.cos(Math.PI - angle + Math.PI / 2);
    const baseLeftY = centerY - 5 * Math.sin(Math.PI - angle + Math.PI / 2);

    const baseRightX = centerX + 5 * Math.cos(Math.PI - angle - Math.PI / 2);
    const baseRightY = centerY - 5 * Math.sin(Math.PI - angle - Math.PI / 2);

    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(baseLeftX, baseLeftY);
    ctx.lineTo(baseRightX, baseRightY);
    ctx.closePath();
    ctx.fillStyle = "#e8e8ea";
    ctx.fill();

   
    ctx.beginPath();
    ctx.arc(centerX, centerY, 9, 0, 2 * Math.PI);
    ctx.fillStyle = "#e8e8ea";
    ctx.fill();
  }, [value]);

  return <canvas ref={canvasRef} width={344} height={155} />;
};



const FilterGauge = ({ title, value, description1, description2 }) => {
  return (
    <div className="bg-[#0B1830] p-4 rounded flex flex-col items-center w-full">
      <div className="text-white font-[400] text-[18px] text-center mb-2">
        {title}
      </div>

      <GaugeCanvas value={value} />

      <div className="text-white text-2xl text-[24px] font-[400] mt-2">{value}</div>

      <div className="mt-2 text-center text-[#9DA3AC] leading-tight">
        <div className="text-[11px] font-[500]">{description1}</div>
        <div className="text-[11px] font-[500]">{description2}</div>
      </div>
    </div>
  );
};


export default function FilterOverviewReport() {
  return (
    <div className="pt-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <FilterGauge
          title="Incoming pressure"
          value={2.2}
          description1="NORMAL VALUE TURNED OFF 6.0"
          description2="RUNNING 3.8–4.2"
        />
        <FilterGauge
          title="Pressure after coarse filter"
          value={3.2}
          description1="NORMAL VALUE TURNED OFF 6.0"
          description2="RUNNING 3.8–4.2"
        />
        <FilterGauge
          title="Pressure after fine filter"
          value={4.2}
          description1="NORMAL VALUE TURNED OFF 6.0"
          description2="RUNNING 3.8–4.2"
        />
        <FilterGauge
          title="Coarse filter"
          value={5.2}
          description1="<0.5 - FILTER INSPECTION"
          description2=">0.6 - PROBABLE FILTER CHANGE"
        />
        <FilterGauge
          title="Fine filter"
          value={1.2}
          description1="<0.5 - FILTER INSPECTION"
          description2=">0.6 - PROBABLE FILTER CHANGE"
        />
      </div>
    </div>
  );
}
