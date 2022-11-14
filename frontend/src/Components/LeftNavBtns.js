import React from "react";
import useForceUpdate from "use-force-update";

const LeftNavBtns = ({ name, setTable }) => {
  const forceUpdate = useForceUpdate();
  return (
    <div className="DBelector">
      <button
        onClick={() => {
          setTable(name);
          forceUpdate();
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default LeftNavBtns;
