import React from 'react';
import logo from './logo.svg';
import axios from "axios"
import Table from "./Table";
import Navbar from "./Nav";
import './App.css';

function App() {
  // data state to store the Randomeuser API data. State's initial value is an empty array
  const [data, setData] = useState([]);
  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios('https://randomuser.me/api/?results=50');
      setData(result.data.results);
      console.log(result.data)
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
