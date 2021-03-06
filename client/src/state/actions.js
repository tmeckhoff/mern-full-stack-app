import axios from 'axios';
export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
const ROOT_URL = 'http://localhost:3001/api/employees';

const getEmployees = employees => ({
    type: GET_EMPLOYEES,
    employees: employees
});

const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    employee: employee
});

const deleteEmployee = id => ({
    type: DELETE_EMPLOYEE,
    id: id
});

const updateEmployee = employee => ({
    type: UPDATE_EMPLOYEE,
    employee: employee
});

export const setSelectedEmployee = employee => ({
    type: SET_SELECTED_EMPLOYEE,
    employee: employee
});

export const getAllEmployees = () => {
    return dispatch => {
        axios.get(`${ROOT_URL}`)
            .then(res => dispatch(getEmployees(res.data)))
            .catch(err => console.error(err))
    }
};

export const addNewEmployee = (employee) => {
    return dispatch => {
        axios.post(`${ROOT_URL}`, employee)
            .then(res => dispatch(addEmployee(res.data)))
            .catch(err => console.error(err))
    }
};

export const deleteEmployeeById = (id) => {
    return dispatch => {
        axios.delete(`${ROOT_URL}/${id}`)
            .then(res => {
                dispatch(deleteEmployee(id));
            })
            .catch(err => console.error(err))
    }
};

export const editEmployee = (employee) => {
    return dispatch => {
        axios.put(`${ROOT_URL}/${employee._id}`, employee)
            .then(res => dispatch(updateEmployee(res.data)))
            .catch(err => console.error(err))
    }
};