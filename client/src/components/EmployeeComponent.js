import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export class EmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    goToEdit(employee) {
        this.props.onClickEdit(employee);
        this.props.history.push( `/employees/edit/${employee._id}`);
    }

    render(){
        const { employee, onClickDelete } = this.props;

        return (
            <TableRow key={`${employee.firstName}-${employee.lastName}-${employee._id}`}>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.jobTitle ? employee.jobTitle : ''}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phoneNumber ? employee.phoneNumber : ''}</TableCell>
                <TableCell>
                    <EditIcon onClick={() => this.goToEdit(employee)} />
                </TableCell>
                <TableCell>
                    <DeleteIcon onClick={onClickDelete} />
                </TableCell>
            </TableRow>
        );

    }

}

EmployeeComponent.propTypes = {
    employee: PropTypes.object,
    onClickDelete: PropTypes.func,
    onClickEdit: PropTypes.func,
    history: PropTypes.object
};