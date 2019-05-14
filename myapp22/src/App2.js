import React from "react";
import logo from './img/logo.png'
//import './app2.css';
import {Link} from 'react-router-dom';



export default class App2 extends React.Component{
    render(){
        return (<div style={{margin:'50px'}}>
                    <img src={logo} alt='dog image' height='150px' width='150px'/>
                    <hr/>
                    <div className='nav' align='center'>
                        <ul style={{display:'inline'}}>
                            <li style={{display:'inline'}}><Link to='/home' >Home</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/store' >Store</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/tutorial' >Tutorial</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/contributor' >Contributor</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/contact' >Contact</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/login' >Login</Link></li> &nbsp;&nbsp;
                            <li style={{display:'inline'}}><Link to='/redux' >Redux</Link></li> &nbsp;&nbsp;
                        </ul>
                    </div>
                    <hr />
                    <div align=''>
                    <footer>Copyrights &copy; 2019.</footer></div>
                </div>
                );
            }
}