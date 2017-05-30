var React = require("react");
var Search = React.createClass({
    handleChange: function (event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleClick: function () {        
        this.props.updateSearch(this.state.topic, this.state.startYear, this.state.endYear);
        return false;
    },
    render: function () {
        return (
            <div className="col-md-6 col-md-offset-3">
              
                    <div className="form-group">
                        <input type="text" className="form-control" id="topic" onChange={this.handleChange} placeholder="Search term" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="startYear" onChange={this.handleChange} placeholder="Start year" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="endYear" onChange={this.handleChange} placeholder="End Year" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
               
            </div>
        );
    }
});
module.exports = Search;