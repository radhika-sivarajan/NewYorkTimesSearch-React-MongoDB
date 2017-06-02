var React = require("react");
var NotificationSystem = require('react-notification-system');

var helpers = require("../utils/helper.js");

var Header = require("./sections/Header");
var Footer = require("./sections/Footer");
var SearchForm = require("./sections/SearchForm");
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
  _notificationSystem: null,
  componentDidMount: function () {
    helpers.getSavedArticle().then(function (dbArticles) {
      this.setState({
        savedArticles: dbArticles.data
      });
    }.bind(this));
    this._notificationSystem = this.refs.notificationSystem;
  },
  componentDidUpdate: function (prevProps, prevState) {
    if ((prevState.topic != this.state.topic) || (prevState.startYear != this.state.startYear) || (prevState.endYear != this.state.endYear)) {
      helpers.searchArticle(this.state.topic, this.state.startYear, this.state.endYear)
        .then((newResult) => {
          this.setState({ resultArticles: newResult });
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
  resetSavedResults: function (newData, message) {
    this.setState({ savedArticles: newData });
    this._notificationSystem.addNotification({
      message: message,
      level: 'info'
    });
  },
  render: function () {
    return (
      <div className="container page">
        <Header />
        <div className="row">
          <SearchForm updateSearch={this.setSearchTerms} />
          <NotificationSystem ref="notificationSystem" />
          <Result resultArticles={this.state.resultArticles} resetSaved={this.resetSavedResults} />
          <Saved savedArticles={this.state.savedArticles} resetSaved={this.resetSavedResults} />
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
