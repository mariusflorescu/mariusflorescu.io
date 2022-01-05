import React from "react";

const DemoBox: React.FC = ({ children }) => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-1000 shadow-md">
      <div className="w-full h-full py-8 px-4 flex justify-center items-center bg-grid-light dark:bg-grid-dark border border-gray-300 dark:border-gray-800">
        {children}
      </div>
    </div>
  );
};

export default DemoBox;
