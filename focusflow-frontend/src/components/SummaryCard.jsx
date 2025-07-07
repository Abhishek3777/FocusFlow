import React from "react";

const SummaryCard = ({ totalTime, subjectWise }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        📅 Weekly Summary
      </h3>
      
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Total Time Studied:</span> {totalTime} minutes
      </p>

      <div>
        <h4 className="text-lg font-medium mb-2 text-gray-700">Subject Breakdown:</h4>
        <ul className="space-y-1">
          {Object.entries(subjectWise).map(([subject, time]) => (
            <li key={subject} className="text-gray-700">
              🔹 <strong>{subject}</strong>: {time} mins
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SummaryCard;
