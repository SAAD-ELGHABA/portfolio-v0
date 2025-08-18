import { AlignJustify, Sparkles } from "lucide-react";
import React from "react";
function Aside({ asideHighlights }) {
  return (
    <div className="md:h-[90vh] md:sticky md:top-5  bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-600 shadow">
      <div className="flex items-center space-x-3 text-blue-600">
        <AlignJustify />
        <h1 className="text-xl font-semibold">List Of Highlights</h1>
      </div>
      <div className="flex flex-col justify-between h-full py-4">
        <ul className="list-none my-4 w-full space-y-4">
          {asideHighlights?.map((a, index) => (
            <li
              key={index}
              className="pl-4 flex items-center space-x-2 text-gray-700"
            >
              <span className="h-1 w-1 bg-blue-600 rounded-full"></span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
        <div className="md:flex justify-center hidden">
          <img src="/ES.png" alt="logo" className="w-46 drop-shadow-sm" />
        </div>
        <div>
          <button className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-400 py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition flex items-center justify-center space-x-2 cursor-pointer">
            <Sparkles className="h-5 w-5"/>
            <span>Let's Make This Service Together</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aside;
