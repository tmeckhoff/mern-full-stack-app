import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addNewEmployee } from '../state/actions';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-flexbox-grid';

const mapStateToProps = (state) => {
    return {
        employee: state.employee
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: () => dispatch(addNewEmployee())
    }
};

class AddEmployeeComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            employee: {
                firstName: '',
                lastName: '',
                jobTitle: '',
                email: '',
                phoneNumber: ''

            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label>Add an Employee</label><br/>
                </div>
                <br/>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" ref="firstName"
                           value={this.state.employee.firstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" ref="lastName"
                           value={this.state.employee.lastName} />
                </div>
                <div>
                    <label>Job Title</label>
                    <input type="text" name="jobTitle" ref="jobTitle"
                           value={this.state.employee.jobTitle} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" ref="email"
                           value={this.state.employee.email} />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" ref="phoneNumber"
                           value={this.state.employee.phoneNumber} />
                </div>
            </div>
        );

    }
}

AddEmployeeComponent.propTypes = {
    employee: PropTypes.object,
    getAllEmployees: PropTypes.func
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(AddEmployeeComponent);