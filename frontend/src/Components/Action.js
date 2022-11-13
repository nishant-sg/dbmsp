import React from 'react'
import {GrEdit} from 'react-icons/gr'
import {MdOutlineDeleteOutline} from 'react-icons/md'

export const Action = () => {
  return (
    <div
    style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        border: "2px solid black",
        height: "20px",
        width: "130px",
        padding: "5px",
        margin: "0px"
    }}
    >
        <GrEdit color='green'/>
        <MdOutlineDeleteOutline color='red'/>
</div>
  )
}
