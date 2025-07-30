import React, { useState } from "react";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const allData = {
    Month: [],
    Week: [],
    Year: [],
};

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
months.forEach((month) => {
    for (let i = 0; i < 4; i++) {
        allData.Month.push({ label: i === 3 ? month : "", total: Math.floor(Math.random() * 800) + 400 });
    }
});

const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
weeks.forEach((week) => {
    allData.Week.push({ label: week, total: Math.floor(Math.random() * 400) + 200 });
});

const years = ["2018","2019","2020","2021", "2022", "2023","2024"];
years.forEach((year) => {
    allData.Year.push({ label: year, total: Math.floor(Math.random() * 4000) + 3000 });
});

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#00D1FF] text-white text-xs px-2 py-1 rounded shadow">
                {`${payload[0].value.toFixed(2)} × 227.03`}
            </div>
        );
    }
    return null;
};

const TankFlowChart = () => {
    const [view, setView] = useState("Month");
    const [rangeIndex, setRangeIndex] = useState(0);
    const itemsPerPage = view === "Month" ? 24 : 6;

    const data = allData[view];
    const maxRange = Math.ceil(data.length / itemsPerPage);
    const visibleData = data.slice(
        rangeIndex * itemsPerPage,
        rangeIndex * itemsPerPage + itemsPerPage
    );

    return (
        <div className="bg-[#0B1830] text-white p-6 rounded max-w-7xl mx-auto">

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[18px] font-[400]">Tank level</h2>
                <select
                    value={view}
                    onChange={(e) => {
                        setView(e.target.value);
                        setRangeIndex(0);
                    }}
                    className="bg-transparent border border-gray-600 text-[11px] rounded-md px-3 py-1 text-white"
                >
                    {Object.keys(allData).map((key) => (
                        <option key={key} value={key} className="bg-[#0B1830] px-4">
                            {key}
                        </option>
                    ))}
                </select>
            </div>

            <div className="relative">
                <ResponsiveContainer width="100%" height={320}>
                    <BarChart
                        data={visibleData}
                        barSize={18}
                        barGap={2}
                        margin={{ top: 0, right: 0, left: 0, bottom: 10 }}
                    >
                        <defs>
                            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#00D1FF" stopOpacity={1} />
                                <stop offset="100%" stopColor="#00D1FF" stopOpacity={0.4} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="0"
                            stroke="rgba(255,255,255,0.06)"
                            vertical={true}
                            horizontal={true}
                        />
                        <XAxis
                            dataKey="label"
                            tick={{ fill: "#CBD5E1", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            interval={0}
                        />
                        <YAxis
                            tick={{ fill: "#CBD5E1", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                            tickCount={6}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0,209,255,0.1)" }} />
                        <Bar
                            dataKey="total"
                            fill="url(#barGradient)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>

                {data.length > itemsPerPage && (
                    <div className="flex justify-center items-center mt-4 gap-6 text-white text-[14px]">
                        <button
                            disabled={rangeIndex === 0}
                            onClick={() => setRangeIndex(rangeIndex - 1)}
                            className="hover:text-cyan-400 disabled:text-gray-500"
                        >
                            &larr;
                        </button>
                        <span className="text-[#6D7483]">{view}</span>
                        <button
                            disabled={rangeIndex >= maxRange - 1}
                            onClick={() => setRangeIndex(rangeIndex + 1)}
                            className="hover:text-cyan-400 disabled:text-gray-500"
                        >
                            &rarr;
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TankFlowChart;
