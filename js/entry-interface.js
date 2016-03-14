var moment = require('moment');

exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
  this.date = function() {
    return moment().format("MMM Do YY");
  };

};
