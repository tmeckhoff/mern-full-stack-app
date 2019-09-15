import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAllEmployees } from '../../state/actions';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-flexbox-grid';
import AddEmployeeComponent from '../../components/AddEmployeeComponent';


const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeesData: () => dispatch(getAllEmployees())
    }
};

export class EmployeeList extends Component {

    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentWillMount(){
        this.props.getEmployeesData();
    }

    render(){

        let title = 'My Company Employee Directory';

        return (
            <Grid fluid>
                <div>
                    <h2 id="title">{title}</h2>
                    <Col xs={9} md={3}>
                        <AddEmployeeComponent/>
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