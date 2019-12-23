import React from 'react'
import { Link } from 'react-router-dom'

class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="navigation-main">
            <ul>
                {this.props.navigationArr.map((value, key) => {
                    return <li key={key}><Link to={value.to}>{value.title}</Link></li>
                })}        
            </ul>
        </div>
    }
}
export default Navigation