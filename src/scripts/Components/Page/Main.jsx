import React from "react";
import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="page"><Header /><main><h3>Основная часть в разработке!</h3></main><Footer /></div>
    }
}
export default Main