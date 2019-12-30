import React from 'react'
import {Link} from "react-router-dom"

class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="navigation-main">
            <ul>
                    {
                        this.props.navigationArr.map((val, index) => {
                            return <li key={index}><Link to={val.to}>{val.title}</Link></li>
                        })  
                    }
            </ul>
        </div>
    }
}
export default Navigation