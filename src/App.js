import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [name, setName] = useState('Jan');

    useEffect(() => {
        document.title = `Celebrate ${name}`
    });

    return <section>
        <p>Congratulations {name}</p>
        <button onClick={() => setName('Will')}>Change Winner</button>
    </section>
}

export default App;
