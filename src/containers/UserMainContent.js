import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import { Button } from 'reactstrap';
import Chemical from '../components/Chemical'

class UserMainContent extends React.Component {
    renderUserInfo = () => {
        return (
            <div className="student-info">
                <h3>User name: {this.props.user.name}</h3>
            </div>
        )
    }

    renderLogout = () => {
        return (
            <Button className="button" onClick={() => {
                localStorage.clear()
                this.props.history.push('/')
                }}>Log Out
            </Button>
        )
    }

    renderChemicals = () => {
        return(
            <div>
                test
                {this.props.chemicals.map(chemical => {
                    return(
                        <p>Date: {chemical.date}, Chemical level: {chemical.level} PPM, Time: {chemical.time}</p>
                    )
                    
                })}
            </div>
        )
    }

    render(){
        let {addChemical, updateChemical} = this.props
        console.log(this.props.chemicals)
        return(
            <div className="main-page">
                Welcome to your main page. 
                {this.renderUserInfo()}
                {this.renderLogout()}               
                <Chemical addChemical={addChemical} updateChemical={updateChemical} />
                {this.renderChemicals()}
            </div> 
        )
    }
}

export default withRouter(UserMainContent)