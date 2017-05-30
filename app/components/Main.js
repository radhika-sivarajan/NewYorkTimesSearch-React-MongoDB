var React = require("react");

var nytSearchQuery = require("../nytAPI.js");

var Header = require("./sections/Header");
var Footer = require("./sections/Footer");
var Search = require("./sections/Search");
var Result = require("./sections/Result");
var Saved = require("./sections/Saved");

var Main = React.createClass({
  getInitialState: function () {
    return {
      topic: "",
      startYear: "",
      endYear: "",
      resultArticles: [],
      savedArticles: []
    }
  },
  setSearchTerms: function (newSearchTerm, newStartYear, newEndYear) {
    this.setState({
      topic: newSearchTerm,
      startYear: newStartYear,
      endYear: newEndYear
    });
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (prevState.topic != this.state.topic) {
      nytSearchQuery.searchArticle(this.state.topic, this.state.startYear, this.state.endYear)
        .then((newResult) => {
          this.setState({
            resultArticles: newResult
          });
        });
    }
  },
  render: function () {
    return (
      <div className="container page">
        <Header />
        <div className="row">
          <Search updateSearch={this.setSearchTerms} />
        </div>
        <div className="row">
          <Result resultArticles={this.state.resultArticles} />
          <Saved savedArticles={this.state.savedArticles} />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
