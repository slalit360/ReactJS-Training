import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            confirmedPassword: ""
        }
        this.passwordMatch =this.passwordMatch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        document.title = "Register";
    }

    passwordMatch = (event) => {
        event.preventDefault();
        const reqBody = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.password !== this.state.confirmedPassword){
            alert("Passwords do not match.");
        }
        //if authenticated, will redirect to login page
        else{
            const checkUsername = axios.post("http://localhost:3000/checkUsername", reqBody) //8081
            .then( () =>
                {   console.log('axios');
                    if (checkUsername.status === "ERROR"){
                        console.log('axios -register ERROR');
                        alert(checkUsername.message);

                    }
                    else{
                        console.log('axios -register');
                        axios.put("/register", reqBody);
                        alert("Registered!")
                        this.props.history.push("/login"); // to redirect
                        console.log(this.props.history);
                    }
                }
            )
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        return(
            <div className="registration">
                <a className="linkToPages" href="/">Home</a>
                <h2>Create an account. All fields are required.</h2>
                <form className="form" align='right' onSubmit={this.passwordMatch}>
                    <label>
                        Username: </label>  <input value={this.state.username} type="text" name="username" onChange={e => this.handleChange(e)} required/>
                    <br/>
                    <br/>
                    <label>
                        First Name: <input value={this.state.firstName} type="text" name="firstName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Last Name: <input value={this.state.lastName} type="text" name="lastName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Street: <input value={this.state.street} type="text" name="street" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        City: <input value={this.state.city} type="text" name="city" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label >
                        State: <select  value={this.state.state} name="state" onChange={e => this.handleChange(e)} required>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Gujrat">Gujrat</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Goa">Goa</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Kerala">Kerala</option>
                        </select>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Zip: <input value={this.state.zip} type="text" pattern="[0-9]{5}" maxLength="5" name="zip" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Mobile no.: <input value={this.state.phone} type="text" pattern="\d{10}" maxLength="12" placeholder="" name="phone" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Email: <input value={this.state.email} type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}" name="email" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password: <input value={this.state.password} type="password" name="password" minLength="5" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Confirm Password: <input value={this.state.confirmedPassword} type="password" name="confirmedPassword" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <input id='subtn' type="submit" value="Register"/>
                </form>
                
                <p>Already have an account? Please <a href="login">log in</a></p>
            </div>
        );
    }
}

export default withRouter(Registration);