# Pretty Camel
[![Build Status](https://secure.travis-ci.org/softek/pretty-camel.png?branch=master)](http://travis-ci.org/softek/pretty-camel)

Node module to prettify camel cased strings. Here are few examples of prettification.
* procedureCode -> Procedure Code
* hospitalCPTCode -> Hospital CPT Code
* eatAHotdog -> Eat A Hotdog
* eatAHotdog -> eat a hotdog (lower case option)
* procCodeA938 -> Proc Code A938
* procA39BCode -> Proc A39B Code
* procA39BCode -. Proc A39B code (sentence case option)

## Rules
The following rules are applied to input strings:
* Words separated by uppercase letters, numbers, underscores, dashes, and periods
* Each word is separated by a space
* A sequence of capital letters and numbers is considered to be one word

## Options
Options are passed in an object as the second parameter to Pretty Camel. Currently the only option available is casing. 

### Case Option
* "title"- (default) Uppercases the first letter of every word
* "sentence"- Uppercases the first letter of the first word and lowercases all other words
* "lower"- Lowercases all words except for abbreviation

```javascript
var prettyCamel = require("pretty-camel");
prettyCamel(input, {
   "case": "title" (default) | "sentence" | "lower"
});
```

## Install
```
npm install pretty-camel
```

## Sample Usage

```javascript
var prettyCamel = require("pretty-camel");
var input = "hospitalCPTCode";
var output = prettyCamel(input);

console.log(output);
```
The outputs is ```Hospital CPT Code```

```javascript
var prettyCamel = require("pretty-camel");
var input = "hospitalCPTCode";
var options = {
   "case": "sentence" 
};
var output = prettyCamel(input, options);

console.log(output);
```
The outputs is ```Hospital CPT code```

```javascript
var prettyCamel = require("pretty-camel");
var input = "hospitalCPTCode";
var options = {
   "case": "lower" 
};
var output = prettyCamel(input, options);

console.log(output);
```
The outputs is ```hospital CPT code```

## Express Middleware
If you're using Express and want access to prettyCamel() in your views, add the following piece of middleware to your server:

```javascript
var prettyCamel = require("pretty-camel");
var express = require("express");
var app = express.createServer();

app.use(prettyCamel.middleware);
```
