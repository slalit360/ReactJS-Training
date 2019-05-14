import React from 'react';

export default class ConditionalRendering extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age,
            }
    }
    
    render(){
        let ui;
        if (this.state.age > 18 ){
             ui = <div>
                You Are Eligible to Vote !
            </div>
        }
        else{
             ui = <div style={{color:'red'}}>
                You Are Not Eligible to Vote !
            </div>
        }
        return (
            <div align='left' style={ {padding:'30px'}}>
                {ui}
            </div>
        );
    }
}