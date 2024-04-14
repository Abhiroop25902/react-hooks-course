import './App.css';
import {useState} from "react";

function App() {
  const [checked, setChecked] = useState(false);

    return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={(e) => {
        setChecked(e.target.checked)
      }}/>
      <p>{checked? 'checked': 'not checked'}</p>
    </div>
  );
}

export default App;
