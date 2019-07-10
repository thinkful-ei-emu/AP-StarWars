import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: { value: "" } };
  setSearchTerm = searchTerm => {
    this.setState({ searchTerm: { value: searchTerm } });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.handleSearch(this.state.searchTerm.value);
          }}
        >
          <label htmlFor="search">Search:</label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Chewy"
            value={this.state.searchTerm.value}
            onChange={e => this.setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
