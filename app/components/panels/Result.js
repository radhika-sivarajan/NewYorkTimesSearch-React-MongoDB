var React = require("react");
var Result = React.createClass({
    render: function () {
        return (
            <div className="col-md-6">
                <div className="panel panel-default" >
                    <div className="panel-heading" >
                        <h3 className="panel-title" > Result </h3>
                    </div>
                    <div className="panel-body text-center" >
                        <h1> {this.props.clicks} </h1>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Result;