import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class Chemical extends React.Component {

    state = {
        level: null,
        date: null,
        time: null 
    }
    
    handleSubmit = (e, addDate, updateDate, deleteDate) => {
        e.preventDefault()
        let {class_name, date} = this.state
        if(class_name !== null && date !== null){
            let date_info = {
                class_name: class_name,
                date: date,
                student_id: parseInt(this.props.student.id)
            }
            // persist to database
            if(this.state.dateAdd){
                addDate(date_info)
            } 
            else if(!this.state.dateAdd && e.target.name === "update"){
                updateDate(this.state.id, date_info)
            }
            else {
                deleteDate(this.state.id, date_info)
            }
            // reset state
            this.setState({
                id: null,
                class_name: null,
                date: null,
                dateAdd: true,
                deleteDate: false
            })
            e.target.parentElement.reset()
        }
        else{
            alert("You must include a class name and date to create a new schedule.")
        }
    }

    autoFillForm = (selectedValue, dates) => {
        if(selectedValue === "n/a"){
            this.setState({
                id: null,
                class_name: null,
                date: null,
                dateAdd: true,
                deleteDate: false
            })
        }
        else{
            let find_date = dates.find(date_info => date_info.id == selectedValue)
            this.setState({
                id: find_date.id,
                class_name: find_date.class_name,
                date: find_date.date,
                dateAdd: false,
                deleteDate: true
            })
        }
    }

    render(){
        return(
            <div>
                Chemical.js 
            </div>
        )
    }
}

export default withRouter(Chemical)