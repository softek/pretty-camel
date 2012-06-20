module.exports = function(input, options) {
   var match, matches, words, i;

   options = options || {};
   matches = input.match(/[A-Z\d]+(?![a-z])|[a-zA-Z][^A-Z\d\-_.]*/g);
   words = [];

   if (matches) {
      for (i = 0; i < matches.length; i++) {
         match = matches[i];

         if (options["case"] != "sentence" || i == 0)
            words.push(match[0].toUpperCase() + match.substring(1));
         else if (!match.match(/^[A-Z\d]+$/))
            words.push(match[0].toLowerCase() + match.substring(1));
         else
            words.push(match);
      }
      return words.join(" ");
   }
   return input;
};

module.exports.middleware = function(request, response, next) {
   response.local("prettyCamel", module.exports);
   next();
};
