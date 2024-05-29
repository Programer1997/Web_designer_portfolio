import React from "react";
import { Link } from "react-router-dom";
import "./modalMenu.scss";

export default function modalMenu(props) {
  const { modalState, setModalState } = props;

  const handleClickModal = () => {
    setModalState(false);
  };

  return (
    <>
      <div className={`modal ${modalState ? "open" : " "}`}>
        <ul>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <li onClick={handleClickModal}>Work</li>
          </Link>
          <Link to="/gallery" style={{ textDecoration: "none" }}>
            <li onClick={handleClickModal}>Gallery</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li onClick={handleClickModal}>About</li>
          </Link>
          <Link to="/resume" style={{ textDecoration: "none" }}>
            <li onClick={handleClickModal}>Resume</li>
          </Link>
        </ul>
        {/*<button onClick={handleClickModal}>Close</button>*/}
      </div>
    </>
  );
}
