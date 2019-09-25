import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getAllEmployees, deleteEmployeeById, setSelectedEmployee} from '../../state/actions';
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
        employees: state.employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllEmployees: () => dispatch(getAllEmployees()),
        deleteEmployeeById: id => dispatch(deleteEmployeeById(id)),
        setSelectedEmployee: employee => dispatch(setSelectedEmployee(employee))
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


    deleteEmployee(id){
        this.props.deleteEmployeeById(id);
    }

    selectEmployee(employee){
        this.props.setSelectedEmployee(employee);
    }

    render(){
        const { employees, history } = this.props;

        return (
            <Paper style={{marginTop: '30px'}}>
                <Link to="/employees/add" style={{textDecoration: 'none'}}>
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
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees && employees.map((employee, i) => (
                            <EmployeeComponent key={i} employee={employee} history={history} onClickDelete={() => this.deleteEmployee(employee._id)} onClickEdit={() => this.selectEmployee(employee)} />
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
    deleteEmployeeById: PropTypes.func,
    setSelectedEmployee: PropTypes.func
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(EmployeeList);