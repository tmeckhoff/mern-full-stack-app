import axios from 'axios';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const GET_EMPLOYEES_ERROR = 'GET_EMPLOYEES_ERROR';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const ADD_EMPLOYEE_ERROR = 'ADD_EMPLOYEE_ERROR';
const ROOT_URL = 'http://localhost:3001/api/employees';

const getEmployees = employees => ({
    type: GET_EMPLOYEES,
    employees: employees
});

const getEmployeesError = (err) => ({
    type: GET_EMPLOYEES_ERROR, err,
});

const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    employee: employee
});

const addEmployeeError = (err) => ({
    type: ADD_EMPLOYEE_ERROR, err,
});

export const getAllEmployees = () => {
    return dispatch => {
        axios.get(`${ROOT_URL}`)
            .then(res => dispatch(getEmployees(res.data)))
            .catch(err => dispatch(getEmployeesError(err)))
    }
};

export const addNewEmployee = (employee) => {
    return dispatch => {
        axios.post(`${ROOT_URL}`, employee)
            .then(res => dispatch(addEmployee(res.data)))
            .catch(err => dispatch(addEmployeeError(err)))
    }
};