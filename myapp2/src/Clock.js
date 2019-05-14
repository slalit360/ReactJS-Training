import React from 'react';

export default class Clock extends React.Component{
    constructor(){
        super();
        this.state = {
            now : new Date()
            }
    }
    tick(){
        this.intervalID = this.setState( {now : new Date()} );
    }
    componentWillMount(){
        setInterval( ()=>{
            this.tick()
        }, 1000 );
        console.log('Component WILL MOUNT!')
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        console.log('Component WILL UNMOUNT!')
    }
    render(){
        return (
            <div align='right' style={ {padding:'30px'}}>
                <h1>Clock</h1>
                <h3>{this.state.now.toLocaleTimeString()}</h3>
            </div>
        );
    }
}