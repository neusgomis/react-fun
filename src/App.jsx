import React, {useState, useEffect} from 'react';
import Greeter from './components/Greeter';
export default App;

function App() {

    const [username, setUserName] = useState('');

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);

    },[loaded]);

    if (!loaded) {
        return (
            <div class="container mt-5">
                <h1>Website Loading...</h1>
                <button class="btn btn-primary" onClick={() => setLoaded(true)}>Load Website</button>
            </div>
        );
    } else {
    return (
        <div class="container mt-5">
            <Greeter phrase="Hello there" name="Ryan"/>
            <label for="exampleInputUsername1">Add your username:</label>
            <input class="form-control" value={username} onChange={e => setUserName(e.target.value)}/>
            <small id="emailHelp" class="form-text text-muted">You are logging in as: {username}</small>
        </div>
    );
  }
}