import './App.css';
import {useContext} from "react";
import {TreesContext} from "./index";

function App() {
    const {trees} = useContext(TreesContext);

    return (
        <>
            <h1>Trees that I have heard of</h1>
            <ul>
                {
                    trees.map(tree => <li key={tree.id}>{tree.type}</li>)
                }
            </ul>
        </>
    )
}

export default App;
