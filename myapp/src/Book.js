import React from "react";

export default class Book extends React.Component
{
    constructor(){
        super();
        this.state=
        {   bookid:1001,
            bookname:'JS'
        }
        this.changePrice =this.changePrice.bind(this);
    }

    changePrice(){
        this.setState({
            bookid:5001+this.state.bookid,
            bookname:'REACT JS'
        });
    }

    render(){
        return (
            <div className='Book'>
                <h4>Book ID : {this.state.bookid} </h4>
                <h4>Book Name : {this.state.bookname} </h4>
                <button onClick={this.changePrice}>Next</button>
            </div>
        );

    }
}