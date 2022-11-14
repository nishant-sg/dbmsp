import React, { useState, useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const TableDetail = ({ table, apiEndpoint }) => {
  const [rows, setRows] = useState([]);
  const [filterForSelectedRows, setFilterForSelectedRows] = useState("");
  const [inputForInsert, setInputForInsert] = useState("");
  const [inputForUpdate, setInputForUpdate] = useState("");
  const [inputForDelete, setInputForDelete] = useState("");

  let displayAllRows = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/allrows`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    let response = await data.json();
    setRows(response.result);
  };

  let displaySelectedRows = async () => {
    let data = await fetch(
      `http://localhost:5000/api${apiEndpoint}/selectedrows`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: filterForSelectedRows }),
      }
    );
    let response = await data.json();
    console.log(response);
  };

  let insertRow = async () => {
    let data = await fetch(`http://localhost:5000/api${apiEndpoint}/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: inputForInsert }),
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

  useEffect(() => {
    displayAllRows();
  }, [table]);

  return (
    <div>
      <div
        style={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "50px",
          marginRight: "50px",
        }}
      >
        <span>
          <form>
            <div className="form">
              <div className="cond">
                <input type="text" name="condition" />
              </div>
              <div className="submit">
                <input type="submit" value="Submit" />
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
      <div>
        <div style={{ display: "inline-flex", flexDirection: "row" }}>
          {Array.from(rows).map((row, index) => {
            return <span key={index}>{row.FN}</span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default TableDetail;
