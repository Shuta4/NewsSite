import React from "react";
import Navigation from "../Navigation/Navigation.jsx"
import ProfileInfo from "../Profile/ProfileInfo.jsx"

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <header className="header-main">
                <div className="header-main__logo">
                    <img src="https://www.101domain.ru/images/flags/large/NEWS.png" alt="logo" className="header-main__logo__image" />
                    <h1 className="header-main__logo__text">News site</h1>
                </div>
                <ProfileInfo />
                <Navigation />
            </header>
    }
}
export default Header