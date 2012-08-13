require("mocha");
var toCamelCase = require("../index").toCamelCase;
var should = require("should");

describe("prettyCamel- toCamelCase()", function() {
   it("should throw an error when input is undefined", function() {
      toCamelCase.should.throw();
   });

   it("should return empty string when input is empty", function() {
      var output = toCamelCase("");
      return output.should.equal("");
   });
   
   it("should return the input when the input contains no words", function() {
      var output = toCamelCase(".[]&^");
      return output.should.equal(".[]&^");
   });

   it("should return the input when the input is a single word", function() {
      var output = toCamelCase("code");
      return output.should.equal("code");
   });

   it("should remove spaces", function() {
      var output = toCamelCase("procedure Code");
      return output.should.equal("procedureCode");
   });

   it("should remove dashes", function() {
      var output = toCamelCase("procedure-Code");
      return output.should.equal("procedureCode");
   });

   it("should remove underscores", function() {
      var output = toCamelCase("procedure_Code");
      return output.should.equal("procedureCode");
   });

   it("should remove periods", function() {
      var output = toCamelCase("procedure.Code");
      return output.should.equal("procedureCode");
   });

   it("should lower case first letter if in lower case", function() {
      var output = toCamelCase("procedure_Code");
      return output.should.equal("procedureCode");
   });

   it("should not lower case first letter if in lower case and acronym", function() {
      var output = toCamelCase("ID_Number");
      return output.should.equal("IDNumber");
   });

   it("should upper case first letter if in upper case", function() {
      var output = toCamelCase("procedure_Code", { "case": "upper" });
      return output.should.equal("ProcedureCode");
   });

   it("should leave casing alone if in upper case and acronym", function() {
      var output = toCamelCase("ID_Number", { "case": "upper" });
      return output.should.equal("IDNumber");
   });

   it("should upper case all words after the first", function() {
      var output = toCamelCase("procedure code");
      return output.should.equal("procedureCode");
   });
});