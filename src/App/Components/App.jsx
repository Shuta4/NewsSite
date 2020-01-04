import React from "react";
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { Provider } from "react-redux";
import rootReducer from "../reducers/rootReducer.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory();
        this.store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
    }

    render() {
        return <Provider store={this.store}>
            <div className="page">
                <Router history={this.history}>
                    <Header 
                        siteImage={this.props.siteImage} 
                        siteName={this.props.siteName}
                        navigationArr={this.props.navigationArr} />
                    <main>
                        <Switch>
                        {
                            this.props.routeArr.map((val, index) => {
                                return <Route key={index} path={val.path} exact={val.exact} component={val.component} />
                            })
                        }
                        </Switch>
                    </main>
                    <Footer 
                        contactsArr={this.props.contactsArr} />
                </Router>
            </div>
        </Provider>
    }
}
export default App