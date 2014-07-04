var assert = require('assert');
var highlight = require('highlight');

describe('highlight', function() {

  it('highlight a letter', function() {
    assert.equal('<b>n</b>ib', highlight('n', 'nib'));
    assert.equal('n<b>i</b>b', highlight('i', 'nib'));
    assert.equal('ni<b>b</b>', highlight('b', 'nib'));
  });

  it('highlight a word', function() {
    assert.equal('<b>Great</b> value for young singles', highlight('Great', 'Great value for young singles'));
    assert.equal('Great value for <b>young</b> singles', highlight('young', 'Great value for young singles'));
    assert.equal('Great value for young <b>singles</b>', highlight('singles', 'Great value for young singles'));
  });

  it('highlight a word case sensitively', function() {
    var options = {ignore_case: false}
    assert.equal('<b>You</b> can trust nib Options to take care of you', highlight('You', 'You can trust nib Options to take care of you', options));
    assert.equal('You can trust nib Options to take care of <b>you</b>', highlight('you', 'You can trust nib Options to take care of you', options));
  });

  it('highlight a word with a custom prefix/suffix', function() {
    var options = {prefix: '<i>', suffix: '</i>'}
    assert.equal('<i>Great</i> value for young singles', highlight('Great', 'Great value for young singles', options));
    assert.equal('Great value for <i>young</i> singles', highlight('young', 'Great value for young singles', options));
    assert.equal('Great value for young <i>singles</i>', highlight('singles', 'Great value for young singles', options));
  });

});