import React from "react";

export default function HomeTableComponents(props) {
  return (
    <div className={props.color === "white" ? "whiteLine" : "greyLine"}></div>
  );
}
