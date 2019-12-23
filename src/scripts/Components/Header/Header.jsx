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
                    <img src={this.props.siteImage} alt="logo" className="header-main__logo__image" />
                    <h1 className="header-main__logo__text">{this.props.siteName}</h1>
                </div>
                <ProfileInfo />
                <Navigation navigationArr={this.props.navigationArr} />
            </header>
    }
}
Header.defaultProps = {
    siteImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStTqyJPqCUN8_TgxZhtW9Y18G0MJyXxv62C_UUB7BDk2rpKDoW",
    siteName: "No name"
}
export default Header