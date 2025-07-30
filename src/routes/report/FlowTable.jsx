import React, { useState } from "react";

const sampleData = [
  { Month: "JAN", Flowin: "20", Flowout: "0.00", Flowreturn: "0.00" },
  { Month: "FEB", Flowin: "20", Flowout: "13.73", Flowreturn: "6.77" },
  { Month: "MAR", Flowin: "20", Flowout: "13.93", Flowreturn: "9.47" },
  { Month: "APR", Flowin: "40", Flowout: "13.73", Flowreturn: "2.50" },
  { Month: "MAY", Flowin: "60", Flowout: "13.78", Flowreturn: "0.00" },
  { Month: "JUN", Flowin: "200", Flowout: "13.87", Flowreturn: "0.00" },
];

export default function FlowTable() {
  const [selectedInterval, setSelectedInterval] = useState("Day");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 25;

  return (
    <div className="col-span-2">
      <div className="bg-[#0B1830] rounded shadow p-4">

        <div className="flex justify-between items-center mb-4">

          <div className="relative mt-4 md:px-5">
            <button
              className="h-[32px] w-[145px] px-5 py-2.5 text-center justify-between text-[11px] font-[400] text-[#B5B9C0] inline-flex items-center border border-[#B5B9C0] rounded text-white"
              type="button"
            >
              {selectedInterval}
              <span className="ml-2">&#9662;</span>
            </button>
          </div>


          <div className="flex items-center gap-3 text-sm text-white md:px-5">

            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className={`text-white ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              &larr;
            </button>

            <div className="flex items-center gap-1">
              <span>{currentPage}</span>
              <span>|</span>
              <span>{totalPages}</span>
            </div>


            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className={`text-white ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              &rarr;
            </button>
          </div>
        </div>


        <div className="w-full p-4 overflow-auto">
          <table className="w-full table-auto border-collapse text-white">
            <thead>
              <tr>
                <th className="p-4 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px]"></th>
                <th className="p-4 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px]">Flow in (kbm)</th>
                <th className="p-4 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px]">Flow out (kbm)</th>
                <th className="p-4 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px]">Flow return</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, index) => (
                <tr key={index} className="border-b border-gray-600">

                  <td className="p-3 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px] bg-[#17243B]">{row.Month}</td>
                  <td className="p-3 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px] bg-[#232F44]">{row.Flowin}</td>
                  <td className="p-3 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px] bg-[#17243B]">{row.Flowout}</td>
                  <td className="p-3 text-center font-[400] text-[11px] text-[#B5B9C0] w-[160px] bg-[#232F44]">{row.Flowreturn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="mt-4 text-right">
          <a
            className="text-[#6D7483] text-[11px] font-[500] underline hover:text-blue-600"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
