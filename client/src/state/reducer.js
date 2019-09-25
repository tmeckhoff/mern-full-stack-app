import { combineReducers } from 'redux';
import {GET_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE, SET_SELECTED_EMPLOYEE} from './actions';
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
        case UPDATE_EMPLOYEE:
            return [...state.map(employee => {
                if (employee._id === action.employee._id) {
                    return action.employee;
                };
                return employee;
            })];
        case SET_SELECTED_EMPLOYEE:
            return [
                Object.assign(initialState.employee, action.employee)
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
