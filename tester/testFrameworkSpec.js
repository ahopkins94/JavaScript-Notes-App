var Tester = require("./tester.js");

describe('Tester', function() {
  describe('describe', function(){
    it('prints string to the console', function(){
      spyOn(console, 'log');
      Tester.describe('test', function(){
        return "";
      });
      expect(console.log).toHaveBeenCalledWith('test');
    });
    it('executes callback function', function(){
      var object = {
        method: function(){
          return "";
        }
      };
      spyOn(object, 'method');
      Tester.describe('test', object.method);
      expect(object.method).toHaveBeenCalled();
    });
  });
  describe("expect", function() {
    it('returns an object', function() {
      var result = Tester.expect("argument");
      expect(typeof result).toBe("object");
    });
    it('returns object with a "toBe" method', function() {
      var result = Tester.expect("argument");
      expect(typeof result.toBe).toBe("function");
    });
  });
  describe("toBe", function() {
    it('checks equality of its argument vs argument passed to "expect()"', function() {
      spyOn(console, 'log');
      var assertion = Tester.expect("hello");
      expect(assertion.toBe("hello")).toEqual(true);
      expect(console.log).toHaveBeenCalledWith('  :)');
    });
    it('checks inequality of its argument vs argument passed to "expect()"', function() {
      spyOn(console, 'log');
      var assertion = Tester.expect("hello");
      expect(assertion.toBe("goodbye")).toEqual(false);
      expect(console.log).toHaveBeenCalledWith('  Error: expected "hello" to equal "goodbye"');
    });
  });

  describe("toInclude", function() {
    it('returns false if not called on array or string', function() {
      var assertion = Tester.expect(9);
      expect(assertion.toInclude("a")).toEqual(false);
    });
    it('returns false if string does not include element', function() {
      var assertion = Tester.expect("hello");
      expect(assertion.toInclude("a")).toEqual(false);
    });
    it('returns true if string does include element', function() {
      var assertion = Tester.expect("hello");
      expect(assertion.toInclude("o")).toEqual(true);
    });
    it('returns false if array doesnt include element', function() {
      var assertion = Tester.expect(["a", "b"]);
      expect(assertion.toInclude("c")).toEqual(false);
    });
    it('returns true if array does include element', function() {
      var assertion = Tester.expect(["a", "b"]);
      expect(assertion.toInclude("b")).toEqual(true);
    });
  });
});
