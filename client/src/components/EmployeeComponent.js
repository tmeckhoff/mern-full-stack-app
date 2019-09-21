import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){

        return (
            <li>
                {this.props.employee}
            </li>
        );

    }

}

EmployeeComponent.propTypes = {
    employee: PropTypes.object
};