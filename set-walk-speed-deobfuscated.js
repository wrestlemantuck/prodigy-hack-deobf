var _0x26cc8b = (function () {
    var _0x307330 = true
    return function (_0x1afbd1, _0x2b50cd) {
      var _0x57b63c = _0x307330
        ? function () {
            if (_0x2b50cd) {
              var _0x25fb43 = _0x2b50cd.apply(_0x1afbd1, arguments)
              return (_0x2b50cd = null), _0x25fb43
            }
          }
        : function () {}
      return (_0x307330 = false), _0x57b63c
    }
  })(),
  _0x1baee = _0x26cc8b(this, function () {
    return _0x1baee
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1baee)
      .search('(((.+)+)+)+$')
  })
_0x1baee()
var _0x7a2c7e = (function () {
  var _0xebd681 = true
  return function (_0x4580cb, _0x3fa897) {
    var _0x4fabab = _0xebd681
      ? function () {
          if (_0x3fa897) {
            var _0x5aa953 = _0x3fa897.apply(_0x4580cb, arguments)
            return (_0x3fa897 = null), _0x5aa953
          }
        }
      : function () {}
    return (_0xebd681 = false), _0x4fabab
  }
})()
var _0x1f8c3f = _0x7a2c7e(this, function () {
  var _0x9e2150
  try {
    var _0x2baa2a = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0x9e2150 = _0x2baa2a()
  } catch (_0x1717f4) {
    _0x9e2150 = window
  }
  var _0x56d9fa = (_0x9e2150.console = _0x9e2150.console || {}),
    _0x38f5e3 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
  for (var _0x26c98b = 0; _0x26c98b < _0x38f5e3.length; _0x26c98b++) {
    var _0x527bbb = _0x7a2c7e.constructor.prototype.bind(_0x7a2c7e)
    var _0x2f81de = _0x38f5e3[_0x26c98b]
    var _0x4b572d = _0x56d9fa[_0x2f81de] || _0x527bbb
    _0x527bbb['__proto__'] = _0x7a2c7e.bind(_0x7a2c7e)
    _0x527bbb.toString = _0x4b572d.toString.bind(_0x4b572d)
    _0x56d9fa[_0x2f81de] = _0x527bbb
  }
})
_0x1f8c3f()
var u_prompt = prompt('What do you want your walkspeed to be?')
null === u_prompt
  ? alert('Not a valid answer.')
  : ((u_prompt = parseFloat(u_prompt)),
    (Boot.prototype.game['_state']['_current'].user.walkSpeed = u_prompt))
