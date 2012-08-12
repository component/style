
/**
 * Expose `style`.
 */

module.exports = style;

/**
 * Return the style for `prop` using the given `selector`.
 *
 * @param {String} selector
 * @param {String} prop
 * @return {String}
 * @api public
 */

function style(selector, prop) {
  var cache = style.cache = style.cache || {}
    , cid = selector + ':' + prop;

  if (cache[cid]) return cache[cid];

  var parts = selector.split(/ +/)
    , len = parts.length
    , parent = document.createElement('div')
    , root = parent
    , child
    , part;

  for (var i = 0; i < len; ++i) {
    part = parts[i];
    child = document.createElement('div');
    parent.appendChild(child);
    parent = child;
    if ('#' == part[0]) {
      child.setAttribute('id', part.substr(1));
    } else if ('.' == part[0]) {
      child.setAttribute('class', part.substr(1));
    }
  }

  document.body.appendChild(root);
  var ret = getComputedStyle(child)[prop];
  document.body.removeChild(root);
  return cache[cid] = ret;
}