import React from "react";

type TProps = {
  title: string;
};

const Window: React.FC<TProps> = ({ children, title }) => {
  return (
    <div className="px-1 shadow-sm group">
      <div className="relative  bg-white dark:bg-black rounded-t-lg py-3 px-16 flex justify-center">
        <div className="absolute left-6 transform top-1/2 -translate-y-1/2 w-[10px] h-[10px] transition-colors duration-200  bg-red-300 dark:bg-red-400 rounded-full group-hover:bg-red-500 group-hover:dark:bg-red-700" />
        <div className="absolute left-10 transform top-1/2 -translate-y-1/2 w-[10px] h-[10px] transition-colors duration-200 bg-yellow-300 dark:bg-yellow-400 rounded-full group-hover:bg-yellow-500 group-hover:dark:bg-yellow-700" />
        <div className="absolute left-14 transform top-1/2 -translate-y-1/2 w-[10px] h-[10px] transition-colors duration-200 bg-green-300 dark:bg-green-400 rounded-full group-hover:bg-green-500 group-hover:dark:bg-green-700" />

        <span className="text-sm font-light">{title}</span>
      </div>
      <div className="flex justify-center items-center py-8 px-4 bg-white dark:bg-black border-t-2 border-neutral-100 dark:border-neutral-900 rounded-b-lg">
        {children}
      </div>
    </div>
  );
};

export default Window;
