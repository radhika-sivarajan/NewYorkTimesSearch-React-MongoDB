var React = require("react");
var Search = React.createClass({
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleClick: function (event) {
        event.preventDefault();
        this.props.updateSearch(this.state.topic, this.state.startYear, this.state.endYear);
        return false;
    },
    render: function () {
        return (
            <div className="col-md-12">
                <div className="search-panel">
                    <form className="form-inline text-center">
                        <div className="form-group">
                            <input type="text" className="form-control" id="topic" onChange={this.handleChange} placeholder="Search term" required />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="startYear" onChange={this.handleChange} placeholder="Start year" required />
                        </div>
                        <div className="form-group">
                            <input type="number" className="form-control" id="endYear" onChange={this.handleChange} placeholder="End Year" required />
                        </div>
                        <button type="submit" className="btn btn-info" onClick={this.handleClick}>Search</button>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = Search;