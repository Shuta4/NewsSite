import React from "react";
import Contacts from "./Contacts.jsx"

class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <footer className="footer-main"><Contacts 
                contactsArr={this.props.contactsArr} />
            </footer>
    }
}
export default Footer