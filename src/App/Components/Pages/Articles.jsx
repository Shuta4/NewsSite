import React from 'react';
import FindArticle from '../FindArticle.jsx';
import AddArticle from '../AddArticle.jsx'

class Articles extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.querySelector('.articles').querySelector(".add-article-button").addEventListener("click", () => {})
    }
    render() {
        return <div className="articles">
            <h3>Поиск по статьям</h3>
                <FindArticle />
            <h3>Лучшие статьи</h3>
            <button className="add-article-button">Добавить статью</button>
            <AddArticle />
        </div>
    }
}

export default Articles