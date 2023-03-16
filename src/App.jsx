import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState("ime: Edita");

  const changeName = () => {
    setName(name === "ime: Edita" ? "prezime: Krizmanic" : "ime: Edita");
  };

  return (
    <div className="App">
      <h2 onMouseOver={changeName} onMouseOut={changeName}>{name}</h2>
    </div>
  );
};

export default App;