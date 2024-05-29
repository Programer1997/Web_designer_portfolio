import React from "react";
import { Link } from "react-router-dom";
import "./navHeader.scss";

export default function NavHeader(props) {
  //const [menuOpen, setMenuOpen] = useState(false);
  const { modalState, setModalState } = props;

  const handleModalMenu = () => {
    if (modalState === false) {
      setModalState(true);
    } else {
      setModalState(false);
    }
  };
  return (
    <>
      <header>
        <div className="headerContainer">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <h2>AV.</h2>
          </Link>
          <nav>
            <ul>
              <a href="/#workSection">
                <li>Work</li>
              </a>
              <Link to="/gallery" style={{ textDecoration: "none" }}>
                <li>Gallery</li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <li>About</li>
              </Link>
              <Link to="/resume" style={{ textDecoration: "none" }}>
                <li className="resume">Resume</li>
              </Link>
            </ul>
          </nav>
          <div className="toggleMenu" onClick={handleModalMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </header>
    </>
  );
}
