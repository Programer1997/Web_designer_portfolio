import React from "react";

export default function homeCompaniesExperiencies(props) {
  return (
    <div className="imgContainer">
      <img
        className="companiesImg"
        src={props.imgUrl}
        alt="no experiencie companies"
      />
    </div>
  );
}
