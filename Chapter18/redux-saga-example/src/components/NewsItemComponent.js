import React from 'react';
import { connect } from "react-redux";

const articlesStyle = {
    color: 'olive',
    border: '1px solid'
}

class NewsItemComponent extends React.Component {
    render() {
        const articles = this.props.articles;
        console.log('debug-NewsItemComponent: ', articles);
        return (
            articles && articles.length > 0 ? (
                articles.map((article) => {
                    return (
                        <div style={articlesStyle}>
                            <h2>{article.title}</h2>
                            <img style={{ width: '200px', height: '150px' }} src={article.urlToImage}/>
                            <h3>{article.description}</h3>
                            <h4>{new Date(article.publishedAt).toLocaleDateString()}</h4>
                            <a href={article.url}>Read more</a>
                        </div>
                    )
                })
            ) : null
        )
    }
}

const mapStateToProps = (state) => ({
   articles: state.news
});

export default connect(mapStateToProps, null)(NewsItemComponent);