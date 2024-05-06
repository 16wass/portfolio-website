import React from "react";

/** TabButton component */ 
/** This component is used to render the tab buttons in the AboutSection component. */ 

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-purple-500 border-b"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;