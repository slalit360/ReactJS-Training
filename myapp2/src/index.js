import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Game from "./Game";
import * as serviceWorker from './serviceWorker';
import Clock from './Clock';
import ConditionalRendering from './ConditionalRendering';
import Forms from './Forms';
import Listdemo from './Listdemo';
import Hoc from './Hoc';
import Hoc2 from './Hoc2';
import EventHandler from './EventHandler';

ReactDOM.render(<div>
                    <h2 align='center' style={{color:'red'}}>React JS Training Day 2</h2>
                    <Clock />
                    <hr />
                    <ConditionalRendering age='10' />
                    <hr />
                    <Forms />
                    <hr />
                    <Game />
                    <hr />
                    <Listdemo/>
                    <hr />
                    <Hoc />
                    <Hoc2 />
                    <EventHandler />
                    
                </div>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
