import React, { Component } from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="footer-main__contacts"> <p>Контакты:</p> 
            <p>Email: <a href="mailto:skirdin.nik@gmail.com" title="email">{this.props.contactEmail}</a></p>
            <p>Telephone: <a href={"tel:" + this.props.contactTelephone} title="telephone">{this.props.contactTelephoneReadable}</a></p>
            <p><a href={this.props.gitHubPageUrl} target="_blank" title="GitHub page">GitHub page</a></p>
            </div>
    }
}
export default Contacts;