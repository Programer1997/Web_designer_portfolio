//import React from "react";
import "./HomeTable.scss";
import LineTable from "./components/HomeTableComponents";

const HomeTable = () => {
  return (
    <div className="containerHomeTable">
      <LineTable color="grey" />
      <LineTable color="white" />
      <LineTable color="grey" />
      <LineTable color="white" />
      <LineTable color="grey" />
      <LineTable color="white" />
      <LineTable color="grey" />
    </div>
  );
};

export default HomeTable;
