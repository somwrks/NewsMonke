import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    let { toggleMode, mode } = this.props;
    return (
      <div>
        <nav
          className={`navbar sticky navbar-expand-lg navbar-${
            mode === "dark" ? "dark" : "light"
          } bg-${mode === "dark" ? "black" : "white"}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/general">
              NewsMonke
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/general">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/science">
                    Science
                  </Link>
                </li>

                {/* the method this gonna call */}
                <i
                  className="fa-regular fa-moon mt-2 ml-4 float-right "
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  onClick={toggleMode}
                ></i>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
