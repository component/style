
/**
 * Module dependencies.
 */

var style = require('style');

function eql(expected, actual) {
  if (expected == actual)
    return
  var err = new Error('"' + actual + '" should equal "' + expected + '"');
  err.expected = expected;
  err.actual = actual;
  throw err;
}

describe('style(selector, prop)', function(){
  it('should support styling faux elements', function(){
    eql('rgb(255, 255, 255)', style('.progress', 'background-color'));
    eql('rgb(221, 221, 221)', style('.progress .percent', 'color'));
    eql('18px', style('.progress .percent', 'font-size'));
  })
  it('should also support svg-style properties', function(){
    eql('miter', style('.progress .percent', 'stroke-linejoin'));
  })
})
