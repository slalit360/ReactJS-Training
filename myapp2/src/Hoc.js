import React from "react";


let hoc = (OldComp) => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {count:5};
    }
    render(){
        return (
            <div align={this.props.align}>
                <h1>
                    Higher Order Components
                </h1>
                <OldComp counter={this.state.count}/>
                <hr/>
            </div>
        );
    }
};

let paragraph = (props) => <div>
    <p> REACTS IS BEST! </p>
    <h4>{props.counter}</h4>
</div>;

let lst = (props) => <div><ol><li> Hello </li> <li> World</li> <li> {props.counter} </li></ol></div>;
let NewComp = hoc(paragraph);
let NewComp1 = hoc(lst)

export default class Hoc extends React.Component{
    render(){
        return (
            <div>
                <NewComp align='right'/>
                <NewComp1 align='left'/>
            </div>
        );
    }
}