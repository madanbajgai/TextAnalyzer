export default function NavBar({ mode }) {
  function handleMode(e) {
    mode = !mode;
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h3 style={{ fontFamily: "monospace", fontWeight: "bold" }}>TextAnalyzer</h3>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex">
              <button onClick={handleMode} className={`btn btn-${mode ? "dark" : "light"}`}>
                {mode ? "Enable Dark Mode" : "Enable Light Mode"}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
