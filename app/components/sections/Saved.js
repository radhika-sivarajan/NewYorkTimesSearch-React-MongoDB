var React = require("react");
var Saved = React.createClass({
    getInitialState: function () {
        return {
            viewSaved: this.props.savedArticles
        }
    },
    render: function () {
        return (
            <div className="col-md-6">
                <div className="panel panel-success" >
                    <div className="panel-heading" >
                        <h3 className="panel-title" > Saved </h3>
                    </div>
                    <div className="panel-body text-center" >
                        <h1> {this.state.viewSaved} </h1>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Saved;