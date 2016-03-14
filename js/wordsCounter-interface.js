exports.wordCount = function(body) {
  var count = 0;
  var wordCount = body.split(" ");
  for(var i = 0; i < wordCount.length; i++)
  {
    count++;
  }
  return count - 1;
};
