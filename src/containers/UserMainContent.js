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
                {this.props.chemicals.map(info => {
                    <p><a href={info.level}>{info.date}</a></p>
                })}
            </div>
        )
    }

    render(){
        let {addChemical, updateChemical, chemicals} = this.props
        console.log(this.props.chemicals)
        return(
                <div className="main-page">
                    Welcome to your main page. 
                    {this.renderUserInfo()}
                    {this.renderLogout()} 
                    <Chemical addChemical={addChemical} updateChemical={updateChemical} chemicals={chemicals}/>
                    {this.renderChemicals()}
                </div> 
            
        )
    }
}

export default withRouter(UserMainContent)