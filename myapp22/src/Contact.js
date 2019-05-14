import React from 'react';
import './contact.css';

export default class Desc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            city: "",
            state: "",
            phone: "",
            email: "",
            color : "",
            code : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        document.title = "Enquiry";
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitEnquiry = e => {
        alert('Your Request Received !');
    }


    render(){
        return(
            <div >
                <h2 style={{margin:'50px'}}>Enquiry Form </h2>
                <form style={{backgroundColor:this.state.color}} className="form" align='right' onSubmit={this.submitEnquiry}>
                    <label>
                        First Name: <input placeholder='First Name' value={this.state.firstName} type="text" name="firstName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Last Name: <input  placeholder='Last Name' value={this.state.lastName} type="text" name="lastName" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        City: <input  placeholder='City' value={this.state.city} type="text" name="city" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label >
                        State: <select value={this.state.state} name="state" onChange={e => this.handleChange(e)} required>
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
                        Mobile no.: <input placeholder="9876543210" value={this.state.phone} type="text" pattern="\d{10}" maxLength="10"  name="phone" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Email: <input placeholder='abc@xyz.com'value={this.state.email} type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}" name="email" onChange={e => this.handleChange(e)} required/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Colorizer: <input  placeholder="Enter color" value={this.state.color} type="text" name="color" onChange={e=>this.handleChange(e)} />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        HTML Code: <input  placeholder="<h1> Hello </h1> " value={this.state.code} type="text" name="code" onChange={e=>this.handleChange(e)} />
                    </label>
                    <br/>
                    <br/>
                    <div align='center' dangerouslySetInnerHTML={{ __html : this.state.code }} />
                    <input id='subtn' type="submit" value="Register"/>
                </form>
                </div>
        );
    }
}