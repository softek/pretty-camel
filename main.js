module.exports = function(input) {
  var match, matches, words, i;
  matches = input.match(/[A-Z\d]+(?![a-z])|[a-zA-Z][^A-Z\d\-_.]*/g);
  words = [];

  for (i = 0; i < matches.length; i++) {
    match = matches[i];
    words[words.length] = match[0].toUpperCase() + match.substring(1);
  }
  return words.join(" ");
};