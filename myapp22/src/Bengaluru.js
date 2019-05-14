import React from 'react';
import {Link} from 'react-router-dom';
import { blockStatement } from '@babel/types';

 export default class Bengaluru extends React.Component{
     render(){
         return(
                <div style={{border:'1px solid black', display:'inline-block', 'border-radius':'5px','margin-left':'50px',width:'500px',padding:'0px 20px 20px 20px'}}>
                    <h3>Bengaluru Book store Address</h3>
                    <address>402, Spice Garden Layout, Marathahalli, Bengaluru, KA-560037 </address>
                </div>
         );
     }
 }