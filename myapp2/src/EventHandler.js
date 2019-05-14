import React from "react";

export default class EventHandler extends React.Component{
    constructor(){
        super();
        this.showAlert = this.showAlert.bind(this);
        this.onHoverEvent =this.onHoverEvent.bind(this);
        this.onHoverOutEvent = this.onHoverOutEvent.bind(this);
    }
    showAlert(e){
        e.preventDefault();
        console.log(e)
        alert("Showing the Alert");
    }
    onHoverEvent(e){
        e.preventDefault();
        e.target.style.backgroundColor='lightblue';
    }
    onHoverOutEvent(e){
        e.preventDefault();
        e.target.style.backgroundColor='white'
    }
    render(){
        return(
            <div align='right'>
                <button  onClick={this.showAlert}>ALERT BTN</button>
                <br/><br/>
                <li onMouseOut={this.onHoverOutEvent} onMouseOver={this.onHoverEvent}>ABC</li>
                <li onMouseOut={this.onHoverOutEvent} onMouseOver={this.onHoverEvent}>PQR</li>
                <li onMouseOut={this.onHoverOutEvent} onMouseOver={this.onHoverEvent}>XYZ</li>
            </div>
        );
    }
}