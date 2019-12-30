import React from "react";
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory();
    }

    render() {
        return <div className="page">
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
    }
}
export default App