import React from 'react';

/* 
    В пропсы данного компонента нужно отдавать объект "articleInfo"
    В данном объекте должен содержаться: 
        - ID статьи, который схож с URL ("/articles/:id") статьи "articleID" 
        - Заголовок статьи "articleHeader"
        - Содержание статьи "articleText"
        - Источник (если есть) объект "articleSource", содержащий: 
            - "sourceLink" (ссылка, которая будет помещена в атрибут "href" тега "a")
            - "sourceName" (текст, который будет помещен в тег "a").
            ! - Если ссылка отсутствует, то тег "a" создан не будет, а "sourceName" будет помещен в тег источника
        - Дата создания статьи объект "articleCreationDate", содержащий "text" - удобочитаемая дата и "date" - дата в стандартном виде
*/

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.renderArticleSource = this.renderArticleSource.bind(this);
    }
    renderArticleSource() {
        if (this.props.articleInfo.articleSource == null) return;
        else {
            if (this.props.articleInfo.articleSource.sourceLink == null) return <p className="article-full__source">
                {this.props.articleInfo.articleSource.sourceText}
            </p>
            else return <p className="article-full__source">
                <a href={this.props.articleInfo.articleSource.sourceLink} className="article-full__link">
                    {this.props.articleInfo.articleSource.sourceText}
                </a>
            </p>
        }
    }
    render() {
        return <article className="article-full">
            <h3 className="article-full__header">{this.props.articleInfo.articleHeader}</h3>
            <div className="article-full__text">{this.props.articleInfo.articleText}</div>
            <div className="article-full__footer">
                <time datetime={this.props.articleInfo.articleCreationDate.date}>
                    {this.props.articleInfo.articleCreationDate.text}
                </time>
                {
                    this.renderArticleSource()
                }
            </div>
        </article>
    }
}

export default Article;