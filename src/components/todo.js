import React from "react";

export default (props) => (
  <div style={{
      display:'flex',
      justifyContent:'center',
    }}>
    <div
    style={{
      textDecoration: props.complete ? "line-through" :""
    }}
    onClick = {props.toggleComplete}
    >
    {props.text}
  </div>
  <button onClick = {props.handleDelete}>x</button>
</div>
);


//<button onClick = {props.handleDelete}>x</button>
