
/**
 * Module dependencies.
 */

var style = require('style');

function assert(expr) {
  if (!expr) throw new Error('assertion failed');
}

describe('style(selector, prop)', function(){
  it('should support styling faux elements', function(){
    assert('rgb(255, 255, 255)' == style('.progress', 'background-color'));
    assert('rgb(221, 221, 221)' == style('.progress .percent', 'color'));
    assert('18px' == style('.progress .percent', 'font-size'));
  })
})
