import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        document.title = "Login";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        this.props.history.push("/contributor");    
    }

    render(){
        return(
            <div className="login">
                <h2 style={{margin:'50px'}} >Please login.</h2>
                <form align='center' className="form" onSubmit={this.login}>
                    <label>
                        Username: <input value={this.state.username} type="text" name="username" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password: <input value={this.state.password} type="password" name="password" onChange={this.handleChange} required/>
                    </label>
                    <br/>
                    <br/>
                    <input id='subtn' type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
