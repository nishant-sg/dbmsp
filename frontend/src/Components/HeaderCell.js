import React from 'react'

export const HeaderCell = ({content}) => {
  return (
    <div
        style={{
            background: "black",
            color: "white",
            border: "2px solid black",
            height: "20px",
            width: "130px",
            padding: "5px",
            margin: "0px"
        }}
        >
          {content}
    </div>
  )
}
