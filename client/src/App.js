import React, { Component } from 'react';
import * as routes from './routes';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './state/reducer';

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <h1>myRetail</h1>
                        <main>
                            <BrowserRouter>
                                <Route path="/" component={routes.EmployeeList} />
                            </BrowserRouter>
                        </main>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }

}


export default App;