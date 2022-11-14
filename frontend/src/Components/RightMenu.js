import React, { useState, useEffect } from "react";
import Header from "./Header";
import TableDetail from "../Components/TableDetail";
import tables from "../constants/tables";

const RightMenu = ({ table }) => {
  let apiEndpoint = "";
  tables.forEach((tableDetail) => {
    if (tableDetail.name === table) {
      apiEndpoint = tableDetail.api;
    }
  });

  const [loading, setLoading] = useState(false);

  const createTable = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    let response = await data.json();
    console.log(response);
    setLoading(false);
  };

  useEffect(
    () => {
      // createTable();
    },
    [
      // table
    ]
  );

  return (
    <>
      {loading ? (
        <span style={{ textAlign: "center" }}>
          <img
            src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9520s2shinf91b6zdrgi8odyg4ab7241md7jfi37id7&rid=200w.gif&ct=g"
            alt="spinner"
            style={{ height: "200px", width: "200px" }}
          />
        </span>
      ) : (
        <div>
          <Header table={table} />
          <TableDetail table={table} apiEndpoint={apiEndpoint} />
        </div>
      )}
    </>
  );
};

export default RightMenu;
