var _0x31384e = (function () {
  var _0x2d2a75 = true
  return function (_0x5c3748, _0x459735) {
    var _0x2c2454 = _0x2d2a75
      ? function () {
          if (_0x459735) {
            var _0x3cdef3 = _0x459735.apply(_0x5c3748, arguments)
            return (_0x459735 = null), _0x3cdef3
          }
        }
      : function () {}
    return (_0x2d2a75 = false), _0x2c2454
  }
})()
var _0x43af1a = _0x31384e(this, function () {
  return _0x43af1a
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(_0x43af1a)
    .search('(((.+)+)+)+$')
})
_0x43af1a()
var _0x508dc8 = (function () {
    var _0x529432 = true
    return function (_0x50fbb5, _0x469ca9) {
      var _0x2f8ad3 = _0x529432
        ? function () {
            if (_0x469ca9) {
              var _0x380248 = _0x469ca9.apply(_0x50fbb5, arguments)
              return (_0x469ca9 = null), _0x380248
            }
          }
        : function () {}
      return (_0x529432 = false), _0x2f8ad3
    }
  })(),
  _0x4b0d55 = _0x508dc8(this, function () {
    var _0x2d62f9 = function () {
      var _0x241f9e
      try {
        _0x241f9e = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x4ab248) {
        _0x241f9e = window
      }
      return _0x241f9e
    }
    var _0x5bb8a0 = _0x2d62f9(),
      _0x152cf3 = (_0x5bb8a0.console = _0x5bb8a0.console || {})
    var _0x30fca7 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x23e840 = 0; _0x23e840 < _0x30fca7.length; _0x23e840++) {
      var _0x459013 = _0x508dc8.constructor.prototype.bind(_0x508dc8)
      var _0x2fcdd4 = _0x30fca7[_0x23e840]
      var _0x4e82f3 = _0x152cf3[_0x2fcdd4] || _0x459013
      _0x459013['__proto__'] = _0x508dc8.bind(_0x508dc8)
      _0x459013.toString = _0x4e82f3.toString.bind(_0x4e82f3)
      _0x152cf3[_0x2fcdd4] = _0x459013
    }
  })
_0x4b0d55()
;('use strict')
!(typeof Number.isNaN === 'function') ||
  (Number.isNaN = function isNaN(_0x56686e) {
    return (
      typeof _0x56686e === 'number' &&
      _0x56686e !== null &&
      (_0x56686e !== _0x56686e || +_0x56686e !== _0x56686e)
    )
  })
typeof Number.isFinite !== 'function' &&
  (Number.isFinite = function isFinite(_0x32e904) {
    if (typeof _0x32e904 !== 'number') {
      return false
    }
    if (
      _0x32e904 !== _0x32e904 ||
      _0x32e904 === Infinity ||
      _0x32e904 === -Infinity
    ) {
      return false
    }
    return true
  })
try {
  var tower = parseInt(
    prompt('What tower level do you want to have? (x >= 0) ')
  )
} catch (_0x297dcc) {
  var tower = NaN
}
!Number.isNaN(tower) &&
  Number.isFinite(tower) &&
  (tower < 0
    ? alert('Invalid Choice, must be (x >= 0)!')
    : ((Boot.prototype.game['_state']['_current'].user.source.data.tower =
        tower),
      Boot.prototype.game['_state']['_current'].user.source.addWin()))
