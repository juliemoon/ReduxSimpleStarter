import React, { Component } from 'react';

class SearchBar extends Component {
  // initialize state in class based component with a constructor function
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }
  //stateful components must have a render method
  //onInputChange method to trigger when user types something:
  // e is an OBJECT and that's how we're calling the properties on the event object
  onInputChange(e) {
    // console.log(e.target.value);
    this.setState({ term: e.target.value })
  }
  render() {
    // input element adds event handler. Event handler triggers onChange - the default event attribute in HTML
    // input takes in a property of onChange and value is onInputChange
    return (
      <div>
        <input onChange={this.onInputChange} />
        {/* <input onChange = {e => this.setState({term: e.target.value})}/> */}
        <p>the value is: {this.state.term}</p>
      </div>
    );
  }
}
export default SearchBar;