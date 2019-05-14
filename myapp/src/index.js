import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
//import Emp, {Manager as MGR}  from './demo-class';
//import {greet} from './demo-class';
//import Student from './Student';
import Alert from './Alert';
import Student from './Student';
import Lifecycle from "./Lifecycle";

class Studidx extends React.Component{
    render(){
        return (
            <div align='center'>
                <Student name='Lalit Suthar' roll_no='11' />
            </div>
        );
    }
}

class Alertidx extends React.Component{
    render(){
        return (
            <div align='center'>
                <Alert />
            </div>
        );
    }
}


 
ReactDOM.render(<Lifecycle />, document.getElementById('root'));




































// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* var emp = new Emp(10,"Lalit");
emp.showDetails();

var mgr = new MGR(10,"Suthar",12345);
mgr.showDetails();

greet(); */
