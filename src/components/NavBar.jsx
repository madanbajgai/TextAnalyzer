import { useState } from "react";
export default function NavBar({ mode, changemode }) {
  return (
    <div className="container">
      <nav className={`navbar navbar-expand-lg navbar-${mode ? "dark" : "light"} bg-${mode ? "dark" : "light"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h1 className="my-3" style={{ fontFamily: "monospace", fontWeight: "bold" }}>
              TextAnalyzer
            </h1>
          </a>

          <div id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <button onClick={changemode} className={`btn btn-${mode ? "light" : "dark"}`}>
                {mode ? "Enable Light Mode" : "Enable Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
