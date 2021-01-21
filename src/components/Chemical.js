import React from 'react';
import {  withRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import {CardBody, Button, Form, Input, FormGroup, Row, Col} from 'reactstrap'

class Chemical extends React.Component {

    state = {
        id: null, 
        level: null,
        date: null,
        time: null,
        chemicalAdd: true
    }
    
    handleSubmit = (e, addChemical, updateDate, deleteDate) => {
        e.preventDefault()
        let {level, date, time} = this.state
        if(level !== null && date !== null && time !== null){
            let chemical_info = {
                level: level,
                date: date,
                time: time,
                user_id: parseInt(this.props.user.id)
            }
            // persist to database
            if(this.state.chemicalAdd){
                addChemical(chemical_info)
            } 
            // else if(!this.state.dateAdd && e.target.name === "update"){
            //     updateDate(this.state.id, chemical_info)
            // }
            // else {
            //     deleteDate(this.state.id, chemical_info)
            // }
            // reset state
            this.setState({
                id: null,
                level: null,
                date: null,
                time: null, 
                chemicalAdd: true
            })
            e.target.parentElement.reset()
        }
        else{
            alert("You must include pool chemical level, date, and time to submit data.")
        }
    }

    autoFillForm = (selectedValue, chemicals) => {
        if(selectedValue === "n/a"){
            this.setState({
                id: null,
                level: null,
                date: null,
                time: true,
            })
        }
        else{
            let find_chemical = chemicals.find(chemical_info => chemical_info.id == selectedValue)
            this.setState({
                id: find_chemical.id,
                level: find_chemical.level,
                date: find_chemical.date,
                time: find_chemical.time, 
            })
        }
    }

    render(){
        let {addChemical, user} = this.props
        if (!user.id) {
            return <span>Loading...</span>;
        }
        console.log(parseInt(this.props.user.id))
        return(
            <div>
                Add chemical levels
                <CardBody>
                    <Form onSubmit={(e) => this.handleSubmit(e, addChemical)}>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="level" id="level" placeholder="Pool chemical level" value={this.state.name} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="date" name="date" id="date" placeholder="Today's date" value={this.state.address} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type="text" name="time" id="time" placeholder="Current Time" value={this.state.city} onChange={this.handleOnChange}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="button">Add chemical data</Button>
                    </Form> 
                </CardBody>
            </div>
        )
    }
}

export default withRouter(Chemical)