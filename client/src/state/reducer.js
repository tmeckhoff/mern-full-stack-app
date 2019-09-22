import { combineReducers } from 'redux';
import { GET_EMPLOYEES, GET_EMPLOYEES_ERROR, ADD_EMPLOYEE, ADD_EMPLOYEE_ERROR } from './actions';
import { createForms } from 'react-redux-form';

const initialState = {
    employees: [],
    employee: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        phoneNumber: ''
    },
    error: {}
};


const employeesReducer = (state = initialState.employees, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return action.employees.data;
        case GET_EMPLOYEES_ERROR:
            return [
            ...initialState.error,
                action.error
            ];
        case ADD_EMPLOYEE:
            return [
                ...state,
                Object.assign({}, action.employee)
            ];
        case ADD_EMPLOYEE_ERROR:
            return [
                ...initialState.error,
                action.error
            ];
        default: return state;
    }
};

export default combineReducers({
    employees: employeesReducer,
    ...createForms({
      employee: initialState.employee
    })
});