var request = require('request');

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var nytHelper = {
    searchArticle: function (topic, startYear, endYear) {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
            authKey + "&q=" + topic + "&begin_date=" + startYear + "0101" + "&end_date=" + endYear + "0101";
        request(queryURL, function (error, response, body) {
            if (JSON.parse(body).response.docs.length === 0) {
                console.log("No records");
            } else {
                var NYTRecords = JSON.parse(body).response;
                var NYTResultArray = [];
                for (var i = 0; i < NYTRecords.docs.length; i++) {
                    if (NYTRecords.docs[i].headline.main) {
                        var NYTResultObject = {};
                        NYTResultObject.title = NYTRecords.docs[i].headline.main;
                        NYTResultObject.author = NYTRecords.docs[i].byline.original;
                        NYTResultObject.publishDate = NYTRecords.docs[i].pub_date;
                        NYTResultObject.snippet = NYTRecords.docs[i].snippet;
                        NYTResultObject.link = NYTRecords.docs[i].web_url;
                        NYTResultArray.push(NYTResultObject);
                    }
                }
                console.log(NYTResultArray);
            }
        });
    }
}

module.exports = nytHelper;