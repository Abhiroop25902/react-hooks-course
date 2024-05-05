import './App.css';
import {useTrees} from "./index";

function App() {
    const {trees} = useTrees();

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
