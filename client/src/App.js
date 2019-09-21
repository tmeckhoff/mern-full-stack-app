import React, { Component } from 'react';
import * as routes from './routes';
import { Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './state/reducer';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer, {employees: []},
    applyMiddleware(...middleware)
);

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <h1>Employee Directory</h1>
                        <main>
                            <Router history={history}>
                                <Route path="/" component={routes.EmployeeList} />
                                <Route path="/add-employee" component={routes.AddEmployee} />
                            </Router>
                        </main>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }

}


export default App;