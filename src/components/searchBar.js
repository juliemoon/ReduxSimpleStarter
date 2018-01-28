import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props){
    super(props)

    this.state = { term: '' }
  }
  render(){
    return (
      <div className="search-bar">
        {/* controlled components state will tell input to change */}
        <input 
        // input's value is coming from state not, input telling state what the value is
          value = { this.state.term } 
          // pass inside of setState function an object with same properties as state
          onChange = {event => this.onInputChange(event.target.value)}/>
          {/* Value of the input: { this.state.term } */}
      </div>
    )
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term)
    //passing into onSearchTermChange in index.js the thing user types into searchbar
  }
}
export default SearchBar;