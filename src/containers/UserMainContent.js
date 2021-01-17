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
                <Chemical/>
            </div>
        )
    }

    render(){
        return(
                <div className="main-page">
                    Welcome to your main page. 
                    {this.renderUserInfo()}
                    {this.renderLogout()} 
                    {this.renderChemicals()}
                </div> 
            
        )
    }
}

export default withRouter(UserMainContent)