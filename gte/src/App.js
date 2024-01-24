import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DiagramDisplay from "./DiagramDisplay";
import BusinessProcessForm from "./BusinessProcessForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BusinessProcessForm className="BusinessProcessForm" />
        <DiagramDisplay className="DiagramDisplay" />
      </header>
    </div>
  );
}

export default App;
