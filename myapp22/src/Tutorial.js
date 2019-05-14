import React from 'react';
import {Link} from 'react-router-dom';

export default class Tutorial extends React.Component{
    render(){
        return(
            <div align='center' border='1px solid black'>
            <ul>
            <li style={{display:'inline'}}><Link to='/tutorial/react' >React</Link></li> &nbsp;&nbsp;
             <li style={{display:'inline'}}><Link to='/tutorial/angular' >Angular</Link></li> &nbsp;&nbsp;
             <li style={{display:'inline'}}><Link to='/tutorial/mongodb' >MongoDb</Link></li> &nbsp;&nbsp;
             <li style={{display:'inline'}}><Link to='/tutorial/node' >Node JS</Link></li> &nbsp;&nbsp;
            </ul>            
        </div>
        );
    }
}