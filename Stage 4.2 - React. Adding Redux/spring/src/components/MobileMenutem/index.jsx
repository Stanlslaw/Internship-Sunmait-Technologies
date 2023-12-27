import React from "react";
import { useState } from "react";

export default function MobileMenuItem({ header, sub }) {
  const [IsOpen, setIsOpen] = useState(false);

  const MenuItemIsOpenHandler = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div className="mobile-menu-item">
      <div className="menu-header-container" onClick={MenuItemIsOpenHandler}>
        <h2
          style={
            IsOpen
              ? { "--arrow-rotate": "135deg" }
              : { "--arrow-rotate": "-45deg" }
          }>
          {header}
        </h2>
      </div>
      <ul
        className="menu-body"
        style={IsOpen ? { display: "block" } : { display: "none" }}>
        {sub.map((item, key) => {
          return <li key={key}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
