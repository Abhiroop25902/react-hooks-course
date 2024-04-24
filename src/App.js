import './App.css';
import {useRef} from "react";

function App() {

    const soundRef = useRef();
    const colorRef = useRef();

    const submit = (e) => {
        e.preventDefault();

        const color = colorRef.current.value;
        const sound = soundRef.current.value;
        alert(`${sound} sounds like ${color}`);

        colorRef.current.value = '';
        soundRef.current.value = '';
    }

    return (

        <form onSubmit={submit}>
            <input ref={soundRef} type="text" placeholder={'Sound..'}/>
            <input ref={colorRef} type="color"/>
            <button>Add</button>
        </form>

    )
}

export default App;
