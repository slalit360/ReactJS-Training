import React, { Component } from "react";
import {connect} from 'react-redux';
import * as courseAction from './actions/courseAction';
import './contact.css'
class ReduxDemo extends Component{
    constructor(){
        super();
        this.state={course:{title:''}}
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.courseRow = this.courseRow.bind(this);
    }
    onTitleChange(e){
        e.preventDefault();
        const course = this.state.course;
        course.title = e.target.value;
        this.setState( {course:course})
    }
    onClickSave(e){
        e.preventDefault();
        //this.props.course = [...this.props.course, ]
        this.props.createCourse( this.state.course);
        console.log(this.props)
    }

    courseRow(c){
        return (<div>
                    <button style={{width:'150px'}} onClick={this.delete(this.props)} value={c.title}>{c.title} </button>
                </div> );
    }
    delete(p){
        console.log(p)
    }
    render(){
        return(
            <div align='center' style={{margin:'50px'}}>
                <h2> Course Page</h2>
                { this.props.course.map(this.courseRow) }
                <h3>Add Course</h3>
                <form >
                    <label>Course Name : </label>
                    <input type='text' value={this.state.course.title} onChange={this.onTitleChange} name='course_name' />
                    <input type='submit' value='ADD' onClick={this.onClickSave} />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {course : state.course }
}

function mapDispatchToProps(dispatch){
    return {
        createCourse : course => dispatch( courseAction.createCourse(course) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps ) (ReduxDemo);