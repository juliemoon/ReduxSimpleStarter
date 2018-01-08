import React from 'react';
import ReactDOM from 'react-dom';
//create a component that will produce HTML
const App = ()=>  <div> hi you</div>;
//insert the component so it will show on the page by inserting it into the DOM
ReactDOM.render(<App/>,
  document.getElementById("root")
);