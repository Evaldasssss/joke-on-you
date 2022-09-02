import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Jokes from './Components/Jokes.jsx';

function App() {

    const [jokes, setJokes] = useState(null);

    useEffect(() => {
     fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
        .then((response) => response.json())
        .then((data) => setJokes(data))
        .catch(_ => setJokes('ERROR'));
    }, []);
   

  return (
    <div className="App">
      <header className="App-header">
        <Jokes jokes={jokes} />
      </header>
    </div>
  );
}

export default App;
