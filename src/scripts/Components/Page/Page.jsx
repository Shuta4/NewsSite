import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import {Router, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

class Page extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Router history={history}>
            <div className="page">
                <Header 
                    siteImage={this.props.siteImage} 
                    siteName={this.props.siteName}
                    navigationArr={this.props.navigationArr} />
                <main>
                    {
                        this.props.routeArr.map((value, key) => {
                        return <Route key={key} path={value.path} component={value.component} exact />
                        })
                    }
                </main>
                <Footer 
                    contactsArr={this.props.contactsArr} />
            </div>
        </Router>
    }
}
export default Page