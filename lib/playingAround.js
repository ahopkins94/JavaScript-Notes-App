var Tester = require("./tester.js")

Tester.describe("just playing around", function() {
  Tester.it("can check if two numbers are equal", function() {
    Tester.expect(5).toBe(7);
  });
});
