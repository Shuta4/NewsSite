import React from 'react'

class FindArticle extends React.Component {
    constructor(props) {
        super(props);
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handlerSubmit(event) {
        event.preventDefault();
        var form = event.target;
        
    }
    render() {
        return <form className="article-find" onSubmit={this.handlerSubmit}>
            <h3>Искать статью</h3>
            <select name="select"> 
                <option value="name">Искать по имени</option>
                <option value="id">Искать по ID</option>
            </select>
            <input type="text" />
            <input type="submit" />
        </form>
    }
}

export default FindArticle;