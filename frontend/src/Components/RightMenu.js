import React, { useState } from "react";
import Header from "./Header";
import TableDetail from "../Components/TableDetail";

const RightMenu = ({table}) => {
  return (
    <div>
      <Header table={table}/>
      <TableDetail table={table} />
    </div>
  );
};

export default RightMenu;
