import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllEmployees } from '../../state/actions';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@material-ui/core';
import {EmployeeComponent} from '../../components/EmployeeComponent';
import {Link} from "react-router-dom";


const mapStateToProps = (state) => {
    return {
        employees: state.employees,
        error: state.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEmployees: () => dispatch(getAllEmployees())
    }
};

export class EmployeeList extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.props.getAllEmployees();
    }

    render(){

        return (
            <Paper style={{marginTop: '30px'}}>
                <Link to="/add-employee" style={{textDecoration: 'none'}}>
                    <Button variant="outlined" color="primary">
                        Add Employee
                    </Button>
                    </Link>
                <Table style={{marginTop: '50px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>First name</TableCell>
                            <TableCell>Last name</TableCell>
                            <TableCell>Job Title</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.employees && this.props.employees.map((employee, i) => (
                            <EmployeeComponent key={i} employee={employee} />
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );

    }

}

EmployeeList.propTypes = {
    employees: PropTypes.array,
    getAllEmployees: PropTypes.func,
    error: PropTypes.object
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(EmployeeList);