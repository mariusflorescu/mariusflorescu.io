import React from 'react'

const DemoBox: React.FC = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-1000">
      <div className="not-prose w-full h-full py-16 px-4 flex justify-center items-center bg-grid-light dark:bg-grid-dark border border-gray-200 dark:border-gray-800">
        {children}
      </div>
    </div>
  )
}

export default DemoBox
