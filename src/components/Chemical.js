import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';

class Chemical extends React.Component {

    state = {
        level: null,
        date: null,
        time: null 
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