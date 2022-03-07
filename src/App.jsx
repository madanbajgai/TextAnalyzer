import "./App.css";
import NavBar from "./components/NavBar";
import { TextInput } from "./components/TextInput";
import { useState } from "react";

function App() {
  const [darkmode, setdarkmode] = useState(false);
  function changeMode() {
    setdarkmode(!darkmode);
    darkmode ? (document.body.style.backgroundColor = "white") : (document.body.style.backgroundColor = "#212529");
  }
  return (
    <div className="App">
      <NavBar mode={darkmode} changemode={changeMode} />
      <TextInput title="Enter Your Text Here" mode={darkmode} />
    </div>
  );
}

export default App;
