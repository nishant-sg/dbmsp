import React, {useState, useEffect} from "react";

const TableDetail = ({table}) => {
    
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "100px",
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
        <span
          className="add"
          style={{ textAlign: "center" }}
          onClick={() => {}}
        >
          +
        </span>
      </div>
      <div>
        <form>
          <div className="data">
            <div className="field"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TableDetail;
