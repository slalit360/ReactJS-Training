import React from 'react';
import {Link} from 'react-router-dom';

 export default class Store extends React.Component{
     render(){
         return(
                <div style={{border:'2px solid black',margin:'50px', display:'block', 'border-radius':'5px',height:'150px' ,width:'150px'}}>
                    <ol>
                        <li><Link to='/store/bengaluru'>Mumbai</Link></li>
                        <li><Link to='/store/bengaluru'>Pune</Link></li>
                        <li><Link to='/store/bengaluru'>Bengaluru</Link></li>
                        <li><Link to='/store/bengaluru'>Noida</Link></li>
                        <li><Link to='/store/bengaluru'>Chennai</Link></li>
                    </ol>
                </div>
         );
     }
 }