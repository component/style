
/**
 * Expose `style`.
 */

module.exports = style;

/**
 * Return the style for `prop` using the given `selector`.
 *
 * @param {String} selector
 * @param {String|Array} prop
 * @return {String|Object}
 * @api public
 */

function style(selector, prop) {
  var cache = style.cache = style.cache || {}
    , arr = Array.isArray(prop)
    , props = arr ? prop : [prop];

  var cids = props.map(function (prop) {
    return selector + ':' + prop;
  });

  var cached = {};
  var missing = [];
  props.forEach(function (prop) {
    var cid = selector + ':' + prop;
    if (cache[cid])
      cached[prop] = cache[cid];
    else
      missing.push(prop);
  });

  if (!missing.length) return arr ? cached : cached[prop];

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
  var styles = getComputedStyle(child);
  missing.forEach(function (prop) {
    var cid = selector + ':' + prop;
    cached[prop] = cache[cid] = styles.getPropertyValue(prop);
  });
  document.body.removeChild(root);
  return arr ? cached : cached[prop];
}
