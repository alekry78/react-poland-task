import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "../scss/main.scss"
import Home from "./Home/Home";
import ViewTodos from "./ViewTodos/ViewTodos";
import store from "../store/store";
import {Provider} from "react-redux";

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/list">
                        <ViewTodos/>
                    </Route>
                </Switch>
            </Provider>
        </Router>
    )
};

export default App