import '../styles/options.css';
import { useState, useEffect } from "react";
import LeftNavigation from "../Components/LeftNavigation";
import RightMenu from "../Components/RightMenu";


function Main2() {
  const [table, setTable] = useState("Admin");
  return (
    <div className="options">
      <LeftNavigation setTable={setTable} />
      <div className="right">
        <RightMenu table={table}/>
      </div>
    </div>
  );
}

export default Main2;
