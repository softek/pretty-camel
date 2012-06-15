var prettyCamel, should;

require("mocha");
prettyCamel = require("./main");
should = require("should");

describe("prettyCamel", function() {
  it("should capitalize the first letter for lower camel case", function() {
    var output;
    output = prettyCamel("procedureCode");
    return output[0].should.equal("P");
  });
  it("should capitalize the first letter for upper camel case", function() {
    var output;
    output = prettyCamel("ProcedureCode");
    return output[0].should.equal("P");
  });
  it("should put a space before capitalized words", function() {
    var output;
    output = prettyCamel("ProcedureCode");
    return output.should.equal("Procedure Code");
  });
  it("should NOT put a space between capital letters in an acronym", function() {
    var output;
    output = prettyCamel("hospitalCPTCode");
    return output.should.equal("Hospital CPT Code");
  });
  it("should treat digits as separate words", function() {
    var output;
    output = prettyCamel("procedureCode543");
    return output.should.equal("Procedure Code 543");
  });
  it("should treat capital letters next to digits as an acronym", function() {
    var output;
    output = prettyCamel("procedureCodeA543");
    return output.should.equal("Procedure Code A543");
  });
  it("should treat underscores as spaces", function() {
    var output;
    output = prettyCamel("procedureA343_code");
    return output.should.equal("Procedure A343 Code");
  });
  it("should treat dashes as spaces", function() {
    var output;
    output = prettyCamel("procedure-A343-Code");
    return output.should.equal("Procedure A343 Code");
  });
  return it("should treat periods as spaces", function() {
    var output;
    output = prettyCamel("procedure.A343.Code");
    return output.should.equal("Procedure A343 Code");
  });
});