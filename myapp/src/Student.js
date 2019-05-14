import React from "react";
import './student.css';

export default class Student extends React.Component
{
    constructor(){
        super();
        this.state={   
            marks : 83
        }
        this.updateMarks = this.updateMarks.bind(this);
    }
    updateMarks(){
        let tmp = this.state.marks + 5 ;
        if(tmp >= 100){
            alert('Students Marks Cannot be Greater than 100 !');
        }
        else {
            this.setState({ marks : this.state.marks + 5 });
        }
    }
    render(){
        return (
            <div id='student_comp'>
                <table align='center' cellspacing="20">
                    <th colspan="2">
                        <h2>Student Result </h2>
                    </th>
                    <tr>
                        <td className='a'>Name  :</td>
                        <td> {this.props.name}</td>
                    </tr>
                    <tr>
                        <td className='a'>Roll No. :</td>
                        <td> {this.props.roll_no}</td>
                    </tr>
                    <tr>
                        <td className='a'>Marks  :</td>
                        <td> {this.state.marks}</td>
                    </tr>
                    <th colspan='2'>
                        <button name='update' value='Update Marks' onClick={this.updateMarks} >Update Marks</button>
                    </th>
                </table>
            </div>
        );
    }
}