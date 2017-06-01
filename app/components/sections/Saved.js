var React = require("react");
var helpers = require("../../utils/helper.js");

var Saved = React.createClass({
    handleClick: function (articleID, event) {
        event.preventDefault();
        helpers.deleteArticle(articleID).then(function () {
            helpers.getSavedArticle().then(function (dbArticles) {
                this.props.resetSaved(dbArticles.data);
                console.log("Deleted from db");
            }.bind(this));
        }.bind(this));
    },
    render: function () {
        if (this.props.savedArticles && this.props.savedArticles.length === 0) {
            return (
                <div className="col-md-6">
                    <div className="panel panel-success" >
                        <div className="panel-heading" >
                            <h3 className="panel-title" > Saved articles </h3>
                        </div>
                        <div className="panel-body text-center" >
                            No saved articles
                        </div>
                    </div>
                </div>
            );
        } else {
            var articles = this.props.savedArticles.map(function (article, i) {
                return (
                    <li className="list-group-item" key={i}>
                        <strong>{article.title}</strong>
                        <small>
                            <br /><i>{article.author}</i>
                            <br />Published date : {article.published_date}
                            <br /><strong>Snippet</strong> : {article.snippet}
                        </small>
                        <div className="text-right">
                            <a href={article.link} target="_blank"> <button type="button" className="btn btn-warning btn-sm mini-button">View</button> </a>
                            <button type="button" className="btn btn-danger btn-sm mini-button" onClick={this.handleClick.bind(this, article._id)}>Delete</button>
                        </div>
                    </li>
                )
            }.bind(this));
        }
        return (
            <div className="col-md-6">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title" > Saved articles </h3>
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
module.exports = Saved;