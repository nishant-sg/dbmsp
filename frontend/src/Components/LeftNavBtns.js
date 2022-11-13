import React from "react";

const LeftNavBtns = ({name, setTable}) => {
  return (
    <div className="DBelector">
      <button onClick={() => {setTable(name)}}>{name}</button>
    </div>
  );
};

export default LeftNavBtns;
