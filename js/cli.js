var Journal = require('./entry-interface.js').Journal;
var wordCount = require('./wordsCounter-interface.js').wordCount;
var prompt = require('prompt');
prompt.start();

prompt.get('Journal', function(err, result) {
  var entry = new Journal(result.title, result.body);
  var count = wordCount(entry.body);
  console.log(entry);
  console.log(count);
});
