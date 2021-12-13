import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MovieCard from './components/MovieCard';
import MovieList from './components/MovieList';
//import  './index.css';
// we can define component in two types like class component and function component
// function component are of two types arrow and simple function ---> stateless function
// class components are stateful components
const App = () => {
  //arrow function;
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <div className="container">
        <MovieList />
      </div>

      <Footer />
    </div>
  );// it always returns a jsx file jsx--> xml used inside js is called jsx;
  //returns the value of render function 
  //render function is used to implement html code inside the javascript
}

export default App;
