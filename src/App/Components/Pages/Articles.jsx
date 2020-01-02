import React from 'react';
import FindArticle from '../FindArticle.jsx';
import AddArticle from '../AddArticle.jsx'
import AllArticles from '../AllArticles.jsx'

class Articles extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="articles">
            <FindArticle />
            <AllArticles />
            <AddArticle />
        </div>
    }
}

export default Articles