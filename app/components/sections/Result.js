var React = require("react");
var Result = React.createClass({
    getInitialState: function () {
        return {
            title: "",
            author: "",
            published_date: "",
            snippet: "",
            link: ""
        }
    },
    render: function () {
        return (
            <div className="col-md-6">
                <div className="panel panel-default" >
                    <div className="panel-heading" >
                        <h3 className="panel-title" > Results </h3>
                    </div>
                    <div className="panel-body text-center" >
                        <ul>data here</ul>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Result;