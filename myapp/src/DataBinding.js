import React from 'react';


export default class DataBinding extends React.Component
{
    render(){
        let str="Facebook"
        let book={
            bookid:123,
            bookname:'React'
        }
        return (
            <div className='block2' >
                <h3>DataBinding in ReactJS</h3>
                <p>React is Developer by {str} Developer</p>
                <p>AR math {100*100} </p>
                <p>BOOK : {JSON.stringify(book)}</p>
            </div>
        );
    }
}