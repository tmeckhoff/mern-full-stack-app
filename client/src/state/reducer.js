import { combineReducers } from 'redux';
import {GET_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE, FILTER_EMPLOYEES} from './actions';
import { createForms } from 'react-redux-form';

const initialState = {
    employees: [],
    employee: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        email: '',
        phoneNumber: ''
    }
};


const employeesReducer = (state = initialState.employees, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return action.employees.data;
        case DELETE_EMPLOYEE:
            return [
                ...state.filter(employee => employee._id !== action.id)
            ];
        case ADD_EMPLOYEE:
            return [
                ...state,
                Object.assign({}, action.employee)
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