import React from 'react';
import Header from './components/Header';
// we can define component in two types like class component and function component
// function component are of two types arrow and simple function ---> stateless function
// class components are stateful components
const App = () => { 
  //arrow function;
  return (
    <div className="App">
    <Header />
    </div>
  );// it always returns a jsx file jsx--> xml used inside js is called jsx;
  //returns the value of render function 
  //render function is used to implement html code inside the javascript
}

export default App;
