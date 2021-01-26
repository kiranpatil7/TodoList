import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class FormFill extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            job: '',
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        //console.log(event.target)
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }
    submitForm = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { names, job } = this.state;
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" value={names} id="name" onChange={this.handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label for="job">Job</Label>
                    <Input type="text" name="job" value={job} id="job" onChange={this.handleChange}></Input>
                </FormGroup>
                <Button className="btn btn-primary" type="submit" onClick={this.submitForm}>Submit</Button>

            </Form>
        )
    }
}


export default FormFill;