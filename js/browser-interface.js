var Journal = require('./../js/entry-interface.js').Journal;
var wordCount = require('./../js/wordsCounter-interface.js').wordCount;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();

    var entry = new Journal(title, body);
    $('#page').append("<h1>" + entry.title + "</h1>" + "<br>" + "<p> Date:" + entry.date() + "</p>" + "<p>" + entry.body + "</p>" + "<h3>Word Count: " + wordCount(body) + "</h3>");
  });
});
