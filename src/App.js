import React from 'react';
import './App.css';
import SearchBar from './components/searchbar';
import Results from './components/results';

function App() {
  return (
    <div className="App">
      <header className="Star Wars Character Search">
      </header>
      <SearchBar/>
      <Results/>
    </div>
  );
}

export default App;
