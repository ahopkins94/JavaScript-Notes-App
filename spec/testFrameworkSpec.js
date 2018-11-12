var tester = require("../lib/tester.js")

describe('describe', function(){
  it('prints string to the console', function(){
    spyOn(console, 'log');
    tester.Describe('test', function(){
      return ""
    });
    expect(console.log).toHaveBeenCalledWith('test');
  });
  it('executes callback funciton', function(){
    var object = {
      method: function(){
        return ""
      }
    }
    spyOn(object, 'method');
    tester.Describe('test', object.method)
    expect(object.method).toHaveBeenCalled()
  });
});
