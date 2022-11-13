import React from "react";

const Header = ({table}) => {
  return (
    <div className="header">
      <h2>{table} Table</h2>
      <button
        className="button1"
        onClick={() => {
          // setAC1(true);
        }}
      >
        Drop
      </button>
    </div>
  );
};

export default Header;
