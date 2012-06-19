module.exports = function(input) {
   var match, matches, words, i;
   matches = input.match(/[A-Z\d]+(?![a-z])|[a-zA-Z][^A-Z\d\-_.]*/g);
   words = [];
   if (matches) {
      for (i = 0; i < matches.length; i++) {
         match = matches[i];
         words[words.length] = match[0].toUpperCase() + match.substring(1);
      }
      return words.join(" ");
   }
   return input;
};

module.exports.middleware = function(request, response, next) {
   response.local("prettyCamel", module.exports);
   next();
};
