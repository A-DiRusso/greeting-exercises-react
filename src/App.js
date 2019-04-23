import React from 'react';
import './App.css';
import GreetLowercase from './GreetLowercase';
import LeetGreet from './LeetGreet';
import CaesarGreet from './CaesarGreet';
import NumberBounce from './NumberBounce';
import CountBy from './CountBy';
import LimitBy from './LimitBy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GreetLowercase name="MAX"/>
        <LeetGreet name="leetspeak"/>
        <CaesarGreet  name="Brutus"/>
        <NumberBounce />
        <CountBy />
        <LimitBy />
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
