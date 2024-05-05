import './App.css';
import {useFetch} from "./useFetch";

function App({login}) {
    const {data, loading, error} = useFetch(`https://api.github.com/users/${login}`);

    if (loading) return <h1>Loading...</h1>
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <>
            <img src={data.avatar_url} alt={data.login}/>

            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}

        </>
    )

}

export default App;
