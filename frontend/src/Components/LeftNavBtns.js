import React from "react";

const LeftNavBtns = ({ name, setTable }) => {
  return (
    <div className="DBelector">
      <button
        style={{ height: "fit-content" }}
        onClick={() => {
          setTable(name);
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default LeftNavBtns;
