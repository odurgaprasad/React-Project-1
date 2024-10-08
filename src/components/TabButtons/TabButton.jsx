import React from "react";

function TabButton({ children, onSelected, isSelected }) {
  return (
    <button
      className={`tab-button ${isSelected ? "selected" : ""}`}
      onClick={onSelected}
    >
      {children}
    </button>
  );
}

export default TabButton;
