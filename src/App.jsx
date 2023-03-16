import { useState } from 'react';
import './App.css';

const App = () => {
  const [name, setName] = useState({
    ime: "ime: Edita",
    prezime: "prezime: Krizmanic"
  });

  const changeName = () => {
    setName({
      ime: name.prezime,
      prezime: name.ime
    });
  };

  return (
    <div className="App">
      <h2 onMouseOver={changeName} onMouseOut={changeName}>{name.ime}</h2>
    </div>
  );
};

export default App;