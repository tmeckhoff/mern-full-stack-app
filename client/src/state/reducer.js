import { combineReducers } from 'redux';
import { GET_EMPLOYEES, ADD_EMPLOYEE } from './actions';

const initialState = {
    employees: [],
    employee: {}
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return action.payload;
        case ADD_EMPLOYEE:
            return action.payload;
        default:
            return {
                ...state
            }
    }
};

export default combineReducers({
    employees: employeesReducer
});