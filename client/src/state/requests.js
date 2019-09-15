import axios from 'axios';
const ROOT_URL = 'http://localhost:3001/api/employees';

export default {
    getEmployees: function (action) {
        return (dispatch) => {
            axios.get(`${ROOT_URL}`)
                .then(({ data }) => {
                    dispatch({
                        type: action,
                        payload: data
                    });
                });
        };
    },

    addEmployee: function (action, props) {
        return (dispatch) => {
            axios.post(`${ROOT_URL}`, props)
                .then(({ data }) => {
                        dispatch({
                            type: action,
                            payload: data
                        });
                });
        };

    }
}
