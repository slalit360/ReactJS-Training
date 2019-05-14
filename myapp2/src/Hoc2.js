import React from "react";

const button =(props) => {
    if(props.needPassword){
        return (<button> I got the password as {props.password} </button>);
    }
    else {
        return (<button>I do not have password ! </button>);
    }
}

let hoc = (OldComp) => class extends React.Component{
    constructor(props){
        super(props);
        this.state = {password:'Lalit', needPassword: true };
    }
    render(){
        return (
            <div>
                <h1> Higher Order Components </h1>
                <OldComp needPassword={this.state.needPassword} password={this.state.password} />
                <hr/>
            </div>
        );
    }
};

let NewComp = hoc(button);

export default class Hoc2 extends React.Component{
    render(){
        return (
            <div>
                <NewComp align='right'/>
            </div>
        );
    }
}