import React from "react";

export const HeaderCell = ({ content }) => {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        textAlign: "center",
        fontWeight: "700",
        fontSize: "20px",
        border: "2px solid white",
        width: "150px",
        padding: "5px",
        margin: "0px",
      }}
    >
      {content}
    </div>
  );
};
