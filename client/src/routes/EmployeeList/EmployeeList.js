import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllEmployees } from '../../state/actions';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-flexbox-grid';
import {EmployeeComponent} from "../../components/EmployeeComponent";


const mapStateToProps = (state) => {
    return {
        employees: state.employees
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

    componentWillMount(){
        this.props.getAllEmployees();
    }

    render(){

        let title = 'Current Employee Directory';

        return (
            <Grid fluid>
                <div>
                    <h2 id="title">{title}</h2>
                    <Col xs={9} md={3}>
                        <Link to="/add-employee" style={{color: 'black'}} activestyle={{color: 'red'}}>Add Employee</Link>
                    </Col>
                    <Col xs={9} md={3}>
                        <ul>
                            {this.props.employees && this.props.employees.map(employee => (
                                <EmployeeComponent key={employee._id} employee={employee} />
                            ))}
                        </ul>
                    </Col>
                </div>
            </Grid>
        );

    }

}

EmployeeList.propTypes = {
    employees: PropTypes.array,
    getAllEmployees: PropTypes.func
};


export default connect(
    mapStateToProps, mapDispatchToProps
)(EmployeeList);