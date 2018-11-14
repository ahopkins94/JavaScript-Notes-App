(function(exports) {

  var beforeFunctions = [];

  var padding = "";

  function describe(description, callback) {
    padding += "  ";
    console.log(padding + description);
    callback();
    beforeFunctions = [];
    padding = padding.substring(2);
  }

  function it(description, callback) {
    padding += "  ";
    beforeFunctions.forEach((callback) => { callback.call(); });
    console.log(padding + description);
    callback();
    padding = padding.substring(2);
  }

  function beforeEach(callback) {
    beforeFunctions.push(callback);
  }

  function expect(expression1) {
    return {
      toBe: function(expression2){
        if (expression1 === expression2) {
          console.log(padding+"  :)");
          return true;
        } else {
          console.log(padding+`  Error: expected "${expression1}" to equal "${expression2}"`);
          return false;
        }
      },
      toInclude: function(element) {
        try {
          expression1.includes(element);
        }
        catch(err) {
          console.log(padding+`  Error: ${expression1} does not have an include() method`);
          return false;
        }
        if (expression1.includes(element)) {
          console.log(padding + "  :)");
          return true;
        } else {
          console.log(padding+`  Error: expected "${expression1}" to include "${element}"`);
          return false;
        }
      }
    };
  }
  exports.describe = describe;
  exports.it = it;
  exports.expect = expect;
  exports.beforeFunctions = beforeFunctions;
  exports.beforeEach = beforeEach;
  exports.padding = padding;
})(this);
