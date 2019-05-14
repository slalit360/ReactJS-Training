import React from 'react';

import axios from 'axios';

export default class Contributor extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(error => {
        console.log("ERROR : "+error)
      });
  }
  tables = (p) =>{
    return ( <tr><td> {p.name} </td><td> {p.email} </td></tr> );
    } 

  render() {    
    return (
      <div>
      <table align='center' >
          <th>Name</th><th>Email id</th>
        { this.state.persons.map(person => this.tables(person))}
      </table>
      <br/>
      <hr />
      </div>
    )
  }
}