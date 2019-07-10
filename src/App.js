import React from "react";
import "./App.css";
import SearchBar from "./components/searchbar";
import Results from "./components/results";

class App extends React.Component {

  state = {
    results: []
  }

  handleSearch = (searchTerm) =>{
    fetch(`https://swapi.co/api/people?search=${searchTerm}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .then(resJson => {
        this.setState({
          results: resJson.results
        });
        console.log(resJson.results)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header> Star Wars Character Search </header>
        <SearchBar handleSearch ={this.handleSearch}/>
        <h2>Results:</h2>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
