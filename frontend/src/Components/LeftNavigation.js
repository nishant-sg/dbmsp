import React from "react";
import LeftNavBtns from "./LeftNavBtns";
import tables from "../constants/tables";

const LeftNavigation = ({setTable}) => {
  
  return (
    <div className="left">
      <div className="border">
        <h2>Choose Table</h2>
      </div>
      <div className="left-down">
      {Array.from(tables).map((table, index) => {
        return <LeftNavBtns name={table.name} key={index} setTable={setTable}/>;
      })}</div>
    </div>
  );
};

export default LeftNavigation;
