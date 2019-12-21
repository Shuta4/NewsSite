import React, { Component } from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="footer-main__contacts">
            <p>Email: <a href="mailto:skirdin.nik@gmail.com" title="email">skirdin.nik@gmail.com</a></p>
            <p>Telephone: <a href="tel:+79157000000" title="telephone">+7 915-7**-**-**</a></p>
            <p><a href="https://github.com/Shuta4/NewsSite" target="_blank" title="GitHub page">GitHub page</a></p>
            </div>
    }
}
export default Contacts;