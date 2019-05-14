import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Hello from "./Hello"
import Block from './Block';
import DataBinding from "./DataBinding"
import Book from './Book';


function App() {
  var name = "Lalit Suthar";
  let Header=()=><div align='center'><h1>Accenture Sol Pvt Ltd.</h1></div>;
  let Footer=()=><div align='center'><h1>Copyrights &copy;2019. All Rights Reserverd</h1></div>
  return (
    <div className="App">
      <Header />
      <h2 id='one'>Welcome to React App!! </h2>
      <h1>Hello User </h1>
      <Hello name={name} />
      <Block />
      <br/>
      <DataBinding />
      <br/>
      <Book />
      <Footer />
    </div>
  );
}

export default App;
