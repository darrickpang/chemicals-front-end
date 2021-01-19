import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import {CardBody, Button, Form, Input, FormGroup, Row, Col} from 'reactstrap'

class Chemical extends React.Component {

    state = {
        id: null, 
        level: null,
        date: null,
        time: null 
    }
    
    handleSubmit = (e, addChemical, updateDate, deleteDate) => {
        e.preventDefault()
        let {level, date, time} = this.state
        if(level !== null && date !== null && time !== null){
            let date_info = {
                level: level,
                date: date,
                time: time,
                user_id: parseInt(this.props.user.id)
            }
            // persist to database
            if(this.state.dateAdd){
                addChemical(date_info)
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
                level: null,
                date: null,
                time: null, 
            })
            e.target.parentElement.reset()
        }
        else{
            alert("You must include pool chemical level, date, and time to submit data.")
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
                <CardBody>
                    <Form onSubmit={(e) => this.handleSubmit(e, addGym)}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="name" id="name" placeholder="Gym name" value={this.state.name} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="address" id="address" placeholder="Gym address" value={this.state.address} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="city" id="city" placeholder="Gym city" value={this.state.city} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="zip_code" id="zip_code" placeholder="Gym zip code" value={this.state.zip_code} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="button">Add gym</Button>
                    </Form> 
                </CardBody>
            </div>
        )
    }
}

export default withRouter(Chemical)