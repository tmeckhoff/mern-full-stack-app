import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';
import PropTypes from 'prop-types';
import * as actions from '../../state/actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const mapStateToProps = (state) => {
    return {
        employee: state.employee
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: employee => dispatch(actions.addNewEmployee(employee))
    }
};

export class AddEmployee extends Component {
    handleSubmit(values) {
        this.props.addEmployee(values);
        this.props.history.push('/');
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    cancelForm() {
        this.props.history.push('/');
    }

    render() {

        const inputStyle = {
            margin: '20px'
        };

        return (
            <Form model="employee" onSubmit={(values) => this.handleSubmit(values)}>
                <h4 style={{marginLeft: '20px'}}>Add Employee</h4>
                <div className='field' style={inputStyle}>
                <Control.text model=".firstName" component={TextField} controlProps={{
                    label: 'First Name'
                }} required />
                </div>
                <div className='field' style={inputStyle}>
                <Control.text model=".lastName" component={TextField} controlProps={{
                    label: 'Last Name'
                }} required />
                </div>
                <div className='field' style={inputStyle}>
                <Control.text model=".jobTitle" component={TextField} controlProps={{
                    label: 'Job Title'
                }} />
                </div>
                <div className='field' style={inputStyle}>
                <Control.text model=".email" component={TextField} controlProps={{
                    label: 'Email'
                }} required />
                </div>
                <div className='field' style={inputStyle}>
                <Control.text model=".phoneNumber" component={TextField} controlProps={{
                    label: 'Phone Number'
                }} />
                </div>
                <Button style={inputStyle} color="secondary" onClick={() => this.cancelForm()}>
                    Cancel
                </Button>
                <Control.reset style={inputStyle} model="employee" type="reset" component={Button} >
                    Clear Values
                </Control.reset>
                <Button style={inputStyle} variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );

    }
}

AddEmployee.propTypes = {
    employee: PropTypes.object,
    addEmployee: PropTypes.func
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(AddEmployee);