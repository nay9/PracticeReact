import React from "react";

class SearchBar extends React.Component {
  state = {term: '' };

  render() {
    return (
      <div className="ui segment">
        Search
        <form className="ui form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label>Image Search</label>
            <input type="text" 
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value})}
             />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
