import React from 'react'

export const RowCell = ({content}) => {
  return (
    <div
        style={{
            background: "grey",
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
