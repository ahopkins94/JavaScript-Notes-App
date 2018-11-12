function describe(description, callback) {
  console.log(description);
  callback();
}

function it(description, callback) {
  describe(description, callback);
}

function expect(expression1) {
  return matchers(expression1);
}

function matchers(expression1) {
  return {
    toBe: function(expression2){
      if (expression1 === expression2) {
        console.log("  :)");
        return true;
      } else {
        console.log(`  Error: expected "${expression1}" to equal "${expression2}"`);
        return false;
      }
    }
  };
}

module.exports.describe = describe;
module.exports.it = it;
module.exports.expect = expect;
