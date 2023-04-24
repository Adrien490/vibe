// components/MonopolyBoard.js
import React from 'react';

const MonopolyBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-wrap w-full h-3/4 bg-white border-2 border-gray-300">
        {Array(31).fill(-1, 1, 31).map((_, i) => (
          <div
            key={i}
            className={`flex-grow flex flex-col justify-center items-center text-center border-2 border-gray-300 p-2 ${
              i % 4 === 0 ? 'bg-blue-500 text-white' : ''
            }`}
          >
            <span className="text-xs">Case {i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonopolyBoard;
