// Import React and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = ()=> {
  const buttonText ='Click Me !';
  return(
   <div>
  <label className="label" htmlFor="name">
    Enter name :
    </label>
  <input id="name" type="text"/>
  <button style={{backgroundColor:'blue',color:'white'}}> 
     {buttonText}
  </button>
</div>
);
};
// Take the React component and show it on the page
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);