import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DiagramDisplay from './DiagramDisplay';
import BusinessProcessForm from './BusinessProcessForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DiagramDisplay />
        <BusinessProcessForm />
      </header>
    </div>
  );
}

export default App;
