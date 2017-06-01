var React = require("react");

var helpers = require("../utils/helper.js");

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
  componentDidMount: function () {
     helpers.getSavedArticle().then(function (dbArticles) {
        this.setState({
          savedArticles: dbArticles.data
        });
      }.bind(this));
  },
  componentDidUpdate: function (prevProps, prevState) {
    if ((prevState.topic != this.state.topic) || (prevState.startYear != this.state.startYear) || (prevState.endYear != this.state.endYear)) {
      helpers.searchArticle(this.state.topic, this.state.startYear, this.state.endYear)
        .then((newResult) => {
          this.setState({
            resultArticles: newResult
          });
        });
    }
  },
  setSearchTerms: function (newSearchTerm, newStartYear, newEndYear) {
    this.setState({
      topic: newSearchTerm,
      startYear: newStartYear,
      endYear: newEndYear
    });
  },
  render: function () {
    return (
      <div className="container page">
        <Header />
        <div className="row">
          <Search updateSearch={this.setSearchTerms} />
          <Result resultArticles={this.state.resultArticles} />
          <Saved savedArticles={this.state.savedArticles} />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
