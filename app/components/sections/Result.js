var React = require("react");
var helpers = require("../../utils/helper.js");

var Result = React.createClass({
    handleClick: function (article, event) {
        event.preventDefault();
        helpers.saveArticle(article.title, article.author, article.publish_date, article.snippet, article.link).then(function () {
            helpers.getSavedArticle().then(function (dbArticles) {
                this.props.resetSaved(dbArticles.data);
                console.log("Saved to db");
            }.bind(this));
        }.bind(this));
    },
    render: function () {
        if (this.props.resultArticles && this.props.resultArticles.length === 0) {
            return (
                <div className="col-md-6">
                    <div className="panel panel-warning" >
                        <div className="panel-heading" >
                            <h3 className="panel-title" > Results </h3>
                        </div>
                        <div className="panel-body text-center" >
                            Search for articles.
                        </div>
                    </div>
                </div>
            );
        } else {
            if (this.props.resultArticles !== undefined) {
                var articles = this.props.resultArticles.map(function (article, i) {
                    return (
                        <li className="list-group-item" key={i}>
                            <strong>{i + 1}. {article.title}</strong>
                            <br /><small><i>{article.author}</i></small>
                            <br />Published date : {article.publish_date}
                            <div className="text-right">
                                <a href={article.link} target="_blank"> <button type="button" className="btn btn-warning btn-sm mini-button">View</button> </a>
                                <button type="button" className="btn btn-success btn-sm mini-button" onClick={this.handleClick.bind(this, article)}>Save</button>
                            </div>
                        </li>
                    )
                }.bind(this));
            } else {
                var articles = <div className="text-center"> SORRY !! No results</div>;
            }
        }
        return (
            <div className="col-md-6">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title" > Results </h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group article-list">
                            {articles}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Result;