var React = require("react");
var Search = React.createClass({
    render: function () {
        return (
            <div className="col-md-6 col-md-offset-3">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search term" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Start year" required />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="End Year" required />
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                </form>
            </div>
        );
    }
});
module.exports = Search;