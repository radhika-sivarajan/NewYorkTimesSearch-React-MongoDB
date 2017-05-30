var React = require("react");
var Header = React.createClass({
    render: function () {
        return (
            <div className="row text-center heading">
                <div className="col-md-12 ">
                    <h1>The New York Times Search</h1>
                </div>
            </div>
        );
    }
});
module.exports = Header;