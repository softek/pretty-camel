module.exports = function (input, options) {
   if (input == void 0) {
      throw new Error("Input must be specified.");
   }

   options = options || {};
   var words = input.match(/[A-Z\d]+(?![a-z])|[a-zA-Z][^A-Z\d\-_.]*/g);

   if (words) {
      for (var i = 0; i < words.length; i++) {

         if (words[i].match(/^[A-Z\d][A-Z\d]+$/)) {
            continue;
         }
         if (options["case"] === "lower") {
            words[i] = lowerCaseWord(words[i]);
         }
         else if (options["case"] === "sentence" && i != 0) {
            words[i] = lowerCaseWord(words[i]);
         }
         else {
            words[i] = upperCaseWord(words[i]);
         }
      }
      return words.join(" ");
   }
   return input;
};

module.exports.toWords = module.exports;

module.exports.toCamelCase = function (input, options) {
   if (input == void 0) {
      throw new Error("Input must be specified.");
   }

   options = options || {};
   var words = input.match(/[A-Za-z][^\.\s_\-]*/g);

   if (words) {
      if (options["case"] === "upper") {
         words[0] = upperCaseWord(words[0]);
      } else {
         words[0] = lowerCaseWord(words[0]);
      }

      for (var i = 1; i < words.length; i++) {
         words[i] = upperCaseWord(words[i]);
      }

      return words.join("");
   }

   return input;
};

var upperCaseWord = function (value) {
   return isAcronym(value) ? value : value[0].toUpperCase() + value.substring(1);
};

var lowerCaseWord = function (value) {
   return isAcronym(value) ? value : value[0].toLowerCase() + value.substring(1);
};

var isAcronym = function (value) {
   return value.length > 1 && value.toUpperCase() === value;
};

module.exports.middleware = function (request, response, next) {
   response.locals.prettyCamel = module.exports;
   next();
};
