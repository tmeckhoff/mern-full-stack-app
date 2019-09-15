import requests from './requests';

export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

const getEmployees = employees => ({
    type: GET_EMPLOYEES,
    employees
});

const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    employee
});


export const getAllEmployees = () => dispatch => {
    requests.getEmployees(employees => {
        dispatch(getEmployees(employees))
    })
};


export const addNewEmployee = () => dispatch => {
    requests.addEmployee(employee => {
        dispatch(addEmployee(employee))
    })
};