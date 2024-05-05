import './App.css';
import {useState} from "react";

function App() {
    const [sound, setSound] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        setColor("000000");
        setSound('')
    }

    return (

        <form onSubmit={submit}>
            <input value={sound} onChange={e => setSound(e.target.value)} type="text" placeholder={'Sound..'}/>
            <input value={color} onChange={e => setColor(e.target.value)} type="color"/>
            <button>Add</button>
        </form>

    )
}

export default App;
