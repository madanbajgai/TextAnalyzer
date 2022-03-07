import "./App.css";
import NavBar from "./components/NavBar";
import { TextInput } from "./components/TextInput";
import { useState } from "react";

function App() {
  const [darkmode, setdarkmode] = useState(true);
  return (
    <div className="App">
      <NavBar mode={darkmode} />
      <TextInput title="Enter Your Text Here" />
    </div>
  );
}

export default App;
