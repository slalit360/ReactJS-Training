import React from "react";
//import ReactDOM from "react-dom";
import './Block.css'

class Block extends React.Component{
    render1(){
        return <input type='submit' onClick={function() { alert('click'); }}/>;
    }

    render(){
        return <div className='block1'>
            <h3>React JS is Developed by Facebook.Inc</h3>
            <h4>
                <li>MERN STACK</li>
                <li>React Native</li>
                <li>Simple and light Weight</li>
                <li>One way Data Binding</li>
                <li>Virtual DOM</li>
            </h4>
        </div>
    }
}

export default Block;