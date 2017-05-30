var React = require("react");
var Result = React.createClass({
    getInitialState: function () {
        return {
            viewResult: []
        }
    },
    componentWillReceiveProps: function (updatedProps) {
        var myResults = updatedProps.resultArticles.map(function (article, i) {
            return (
                <div className="list-group-item" key={i}>
                    <a href={article.link} target="_blank">{article.title}</a>
                    <br />{article.author}
                    <br />{article.publish_date}
                    <br />Snippet: {article.snippet}
                </div>
            )
        });
        this.setState({ viewResult: myResults });
    },
    render: function () {
        if (this.props.resultArticles.length === 0) {
            return (
                <div className="col-md-6">
                    <div className="panel panel-default" >
                        <div className="panel-heading text-center" >
                            <h3 className="panel-title" > Results </h3>
                        </div>
                        <div className="panel-body text-center" >
                            Search for articles.
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="col-md-6">
                    <div className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading text-center">
                                <h4 className="panel-title">Results</h4><br/>
                                <a data-toggle="collapse" href="#articles"> .... </a>
                            </div>
                            <div id="articles" className="panel-collapse collapse">
                                <div className="panel-body">{this.state.viewResult}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
});
module.exports = Result;