import React from 'react';
import {connect} from 'react-redux'
import { articlesFetchData } from '../Actions/articles'
import Article from './Article.jsx';

class AllArticles extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchData("/api/articles")
    }
    render() {
        return <div className="articles">
            <h3> Все статьи </h3>
            {
                this.props.articles.map((value, index) => {
                    var obj = {
                        articleID: value.id,
                        articleHeader: value.header,
                        articleText: value.text,
                        articleSource: {
                            sourceLink: value.sourceLink,
                            sourceName: value.sourceName
                        },
                        articleCreationDate: {
                            text: value.creationDateText,
                            date: new Date(value.creationDate)
                        }
                    };
                    <Article key={index} articleInfo={obj}/>
                })
            }
        </div>
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {dispatch(articlesFetchData())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllArticles)