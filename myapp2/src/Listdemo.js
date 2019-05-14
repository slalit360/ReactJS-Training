import React from "react";

export default class Listdemo extends React.Component{
    feat = ['Vitual DOM', 'One way Data Binding', 'Simple and light weight', 'State & Props'];
    list = this.feat.map( (ele) => <li>{ele}</li>);
    
    books = [['123','JS'],['111','PYTHON']];
    booklist = this.books.map( (a) => <tr align='center'><td>{a[0]}</td> <td>{a[1]}</td></tr> )

    books1 =[{'id':'1212','book':'ABC'},{'id':'1111', 'book':'XYZ'}];
    booklist1 = this.books1.map( (bk) => <tr align='center'><td>{bk.id}</td> <td>{bk.book}</td></tr> )

    render(){
        return(<div>
            <div align='right'>
                <h3> Features of React </h3>
                { this.list }
                
            </div>
            <div align='left'>
                <h3> BOOK LIST </h3>
                <table border='1'>
                    <th align='center'>ID</th> <th>NAME</th>
                    {this.booklist1}
                </table>
            </div>
            </div>
        );
    }
}

