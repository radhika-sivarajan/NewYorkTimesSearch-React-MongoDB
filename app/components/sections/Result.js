var React = require("react");


var Result = React.createClass({
    getInitialState: function () {
        return {
            viewResult: []
        }
    },
    componentWillReceiveProps: function (updatedProps) {
        if (updatedProps.resultArticles !== undefined) {
            var myResults = updatedProps.resultArticles.map(function (article, i) {
                return (
                    <li className="list-group-item" key={i}>
                        <strong> {i+1}. {article.title}</strong>
                        <br /> {article.author}
                        <br />Published date : {article.publish_date}
                        <a href={article.link} target="_blank"> View </a>
                    </li>
                )
            });
            this.setState({ viewResult: myResults });
        } else {
            var myResults = function () {
                return (
                    // <img src=".../public/images/no-result.png" alt="No results"/>
                    <p>No result</p>
                )
            };
            this.setState({ viewResult: myResults });
        }
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
            return (
                <div className="col-md-6">
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <h3 className="panel-title" > Results </h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group article-list">
                                {this.state.viewResult}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
    }
});
module.exports = Result;