import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export class EmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { employee, onClick } = this.props;
        return (
            <TableRow key={`${employee.firstName}-${employee.lastName}-${employee._id}`}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.jobTitle ? employee.jobTitle : ''}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phoneNumber ? employee.phoneNumber : ''}</TableCell>
                <TableCell>
                    <DeleteIcon onClick={onClick} />
                </TableCell>
            </TableRow>
        );

    }

}

EmployeeComponent.propTypes = {
    employee: PropTypes.object,
    onClick: PropTypes.func
};