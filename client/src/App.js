import React, { Component } from 'react';
import * as routes from './routes';
import {Router, Route} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './state/reducer';
import { createBrowserHistory } from 'history';
import {MuiThemeProvider} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
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
        const theme = createMuiTheme({
            palette: {
                type: 'light',
            },
        });

        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                               <Typography variant="h6">
                                   Employee Directory
                               </Typography>
                            </Toolbar>
                        </AppBar>
                        <main>
                            <Router history={history}>
                                <Route exact path="/" component={routes.EmployeeList} />
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