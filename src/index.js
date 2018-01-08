import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';
const API_KEY = "AIzaSyDyPe_ll_u6l6pgkSwanqTniOLTXTWXowU";
//create a component that will produce HTML
const App = ()=>  <SearchBar/>;
//insert the component so it will show on the page by inserting it into the DOM
ReactDOM.render(<App/>,
  document.getElementById("root")
);