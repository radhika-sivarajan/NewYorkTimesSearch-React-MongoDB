var React = require("react");

var Header = require("./panels/Header");
var Footer = require("./panels/Footer");
var Search = require("./panels/Search");
var Result = require("./panels/Result");
var Saved = require("./panels/Saved");

var Main = React.createClass({
  render: function () {
    return (
      <div className="container page">
        <Header />
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <Result />
          <Saved />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
