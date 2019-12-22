import React from "react";
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

class Page extends React.Component {
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
                    contactsArr={this.props.contactsArr} />
            </div>
    }
}
export default Page