var React = require("react");
var Saved = React.createClass({
    render: function () {
        return (
            <div className="col-md-6">
                <div className="panel panel-default" >
                    <div className="panel-heading" >
                        <h3 className="panel-title" > Saved </h3>
                    </div>
                    <div className="panel-body text-center" >
                        <h1> {this.props.clicks} </h1>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Saved;