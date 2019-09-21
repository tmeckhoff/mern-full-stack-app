import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';
import { TextField } from 'material-ui';
import PropTypes from 'prop-types';
import * as actions from '../../state/actions';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

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
    handleChange(values) {console.log('VALUES in change', values);}
    handleUpdate(form) {console.log('FORM in update', form);}
    handleSubmit(values) {
       this.props.addEmployee(values);
       this.props.history.push('/');
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Form model="employee" onUpdate={(form) => this.handleUpdate(form)}
                  onChange={(values) => this.handleChange(values)}
                  onSubmit={(values) => this.handleSubmit(values)}>
                <div className="field">
                    <label>First name:</label>
                <Control.text model=".firstName" component={TextField} required />
                </div>
                <div className="field">
                    <label>Last name:</label>
                <Control.text model=".lastName" component={TextField} required />
                </div>
                <div className="field">
                    <label>Job Title:</label>
                <Control.text model=".jobTitle" component={TextField} />
                </div>
                <div className="field">
                    <label>Email:</label>
                <Control.text model=".email" component={TextField} required />
                </div>
                <div className="field">
                    <label>Phone Number:</label>
                <Control.text model=".phoneNumber" component={TextField} />
                </div>
                <RaisedButton type="submit">
                    Submit
                </RaisedButton>
                <Control.reset model="employee" type="reset" component={RaisedButton} >
                    Clear Values
                </Control.reset>
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