import React from "react";
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="page">
                <Header 
                    siteImage={this.props.siteImage} 
                    siteName={this.props.siteName} />
                <main>
                    <h3>Основная часть в разработке!</h3>
                </main>
                <Footer 
                    contactTelephone={this.props.contactTelephone} 
                    contactTelephoneReadable={this.props.contactTelephoneReadable} 
                    contactEmail={this.props.contactEmail} 
                    gitHubPageUrl={this.props.gitHubPageUrl} />
            </div>
    }
}
export default Main