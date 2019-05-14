import React from 'react';

 export default class Forms extends React.Component{
    constructor(){
        super();
        this.state={
            flag:false
        }
        this.toggle =this.toggle.bind(this);
    }
    toggle(){
        this.setState(
            {
                flag : ! this.state.flag
            }
        );
    }

     render(){
         let msg, btmsg;
         if( this.state.flag){
            msg = <h1>Welcome to Portal</h1>;
            btmsg = "Logout"
         }
         else{
            msg = <h1>Please login with Credential</h1>;
            btmsg = "Login"
         }
         return (
             <div align="right">
                 {msg}
                 <button onClick={this.toggle}>{btmsg}</button>
             </div>
         );
     }
 }