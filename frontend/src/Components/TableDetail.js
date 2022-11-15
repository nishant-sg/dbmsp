import React, { useState, useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

import { HeaderCell } from "./HeaderCell";
import { RowCell } from "./RowCell";

const TableDetail = ({ table, apiEndpoint }) => {
  const [tableScheme, setTableScheme] = useState([]);
  const [rows, setRows] = useState([]);
  const [filterForSelectedRows, setFilterForSelectedRows] = useState("");
  const [inputFields, setInputFields] = useState([]);
  const [inputForUpdate, setInputForUpdate] = useState("");
  const [inputForDelete, setInputForDelete] = useState("");

  let scheme = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/scheme`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let response = await data.json();
    setTableScheme(response.result);
    let inputObject = {};
    tableScheme.forEach((table) => {
      inputObject[table] = "";
    });
  };

  let displayAllRows = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/allrows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    let response = await data.json();
    setRows(response.result);
  };

  let displaySelectedRows = async (e) => {
    e.preventDefault();
    let data = await fetch(
      `http://localhost:5000/api${apiEndpoint}/selectedrows`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: filterForSelectedRows }),
      }
    );
    let response = await data.json();
    setRows(response.result);
  };

  let insertRow = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "" }),
    });
    let response = await data.json();
    console.log(response);
  };

  let updateRow = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: inputForUpdate }),
    });
    let response = await data.json();
    console.log(response);
  };

  let deleteRow = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: inputForDelete }),
    });
    let response = await data.json();
    console.log(response);
  };

  const handleChange = (e) => {
    if (e.target.name == "filterForSelectedRows")
      setFilterForSelectedRows(e.target.value);
  };

  useEffect(() => {
    scheme();
    displayAllRows();
  }, [table]);

  return (
    <div style={{ width: "90%", marginLeft: "50px", marginRight: "50px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span>
          <form onSubmit={displaySelectedRows}>
            <div className="form">
              <div className="cond">
                <input
                  type="text"
                  onChange={handleChange}
                  name="filterForSelectedRows"
                  style={{ width: "500px" }}
                />
              </div>
              <div className="submit">
                <input
                  type="submit"
                  value="Submit"
                  onSubmit={displaySelectedRows}
                />
              </div>
            </div>
          </form>
        </span>
        <AiFillPlusCircle
          size={30}
          color="green"
          style={{ cursor: "pointer" }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <div>
          <div style={{ display: "inline-flex", flexDirection: "row" }}>
            {Array.from(tableScheme).map((column, index) => {
              return <HeaderCell key={index} content={column}></HeaderCell>;
            })}
          </div>
        </div>
        {Array.from(rows).map((row, index) => {
          return (
            <div key={index}>
              <div style={{ display: "inline-flex", flexDirection: "row" }}>
                {Array.from(Object.values(row)).map((rowEntry, RowIndex) => {
                  return <RowCell key={RowIndex} content={rowEntry}></RowCell>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableDetail;
