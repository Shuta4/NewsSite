import React from "react";
import Contacts from "./Contacts.jsx"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <footer className="footer-main"><Contacts 
                contactTelephone={this.props.contactTelephone} 
                contactTelephoneReadable={this.props.contactTelephoneReadable} 
                contactEmail={this.props.contactEmail} 
                gitHubPageUrl={this.props.gitHubPageUrl} />
            </footer>
    }
}
Footer.defaultProps = {
    contactTelephone: "",
    contactTelephoneReadable: "No telephone",
    contactEmail: "No email",
    gitHubPageUrl: "No github page"
}
export default Footer