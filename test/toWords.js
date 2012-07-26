require("mocha");
var prettyCamel = require("../index");
var should = require("should");

describe("prettyCamel- toWords()", function() {
   it("should throw an error when input is undefined", function() {
      prettyCamel.should.throw();
   });

   it("should return empty string when input is empty", function() {
      var output = prettyCamel("");
      return output.should.equal("");
   });
   
   it("should return the input when the input contains no words", function() {
      var output = prettyCamel(".[]&^");
      return output.should.equal(".[]&^");
   });
   
   it("should capitalize the first letter for lower camel case", function() {
      var output = prettyCamel("procedureCode");
      return output[0].should.equal("P");
   });
   
   it("should capitalize the first letter for upper camel case", function() {
      var output = prettyCamel("ProcedureCode");
      return output[0].should.equal("P");
   });
   
   it("should put a space before capitalized words", function() {
      var output = prettyCamel("ProcedureCode");
      return output.should.equal("Procedure Code");
   });
   
   it("should NOT put a space between capital letters in an acronym", function() {
      var output = prettyCamel("hospitalCPTCode");
      return output.should.equal("Hospital CPT Code");
   });
   
   it("should treat digits as separate words", function() {
      var output = prettyCamel("procedureCode543");
      return output.should.equal("Procedure Code 543");
   });
   
   it("should treat capital letters next to digits as an acronym", function() {
      var output = prettyCamel("procedureCodeA543");
      return output.should.equal("Procedure Code A543");
   });
   
   it("should treat underscores as spaces", function() {
      var output = prettyCamel("procedureA343_code");
      return output.should.equal("Procedure A343 Code");
   });
   
   it("should treat dashes as spaces", function() {
      var output = prettyCamel("procedure-A343-Code");
      return output.should.equal("Procedure A343 Code");
   });
   
   it("should treat periods as spaces", function() {
      var output = prettyCamel("procedure.A343.Code");
      return output.should.equal("Procedure A343 Code");
   });
   
   it("should only capitalize the first letter if in sentence case", function() {
      var output = prettyCamel("sentenceCaseThisDude", { "case": "sentence" });
      return output.should.equal("Sentence case this dude");
   });
   
   it("should not lower case 'abbreviated' if in sentence case", function() {
      var output = prettyCamel("procedureA34V9Code", { "case": "sentence" });
      return output.should.equal("Procedure A34V9 code");
   });
   
   it("should lower case all words if in lower case", function() {
      var output = prettyCamel("lowerCaseMePlease", { "case": "lower" });
      return output.should.equal("lower case me please");
   });
   
   it("should lower case single uppercase letters, like A", function() {
      var output = prettyCamel("eatAHotdog", { "case": "lower" });
      return output.should.equal("eat a hotdog");
   });
   
   it("should not lower case 'abbreviated' if in lower case", function() {
      var output = prettyCamel("procedureA34V9Code", { "case": "lower" });
      return output.should.equal("procedure A34V9 code");
   });
   
   it("should alias toWork()", function() {
      var output = prettyCamel.toWords("procedureA343_code");
      return output.should.equal("Procedure A343 Code");
   });
});