var _0x574bdb = (function () {
    var _0x2d3861 = true
    return function (_0xa7af7, _0xc91cab) {
      var _0xf6b460 = _0x2d3861
        ? function () {
            if (_0xc91cab) {
              var _0x18a51e = _0xc91cab.apply(_0xa7af7, arguments)
              return (_0xc91cab = null), _0x18a51e
            }
          }
        : function () {}
      return (_0x2d3861 = false), _0xf6b460
    }
  })(),
  _0x3e520a = _0x574bdb(this, function () {
    return _0x3e520a
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3e520a)
      .search('(((.+)+)+)+$')
  })
_0x3e520a()
var _0x52b0f4 = (function () {
    var _0x324e4e = true
    return function (_0x29eb8b, _0x453c4c) {
      var _0x16775f = _0x324e4e
        ? function () {
            if (_0x453c4c) {
              var _0x4fc222 = _0x453c4c.apply(_0x29eb8b, arguments)
              return (_0x453c4c = null), _0x4fc222
            }
          }
        : function () {}
      return (_0x324e4e = false), _0x16775f
    }
  })(),
  _0x45a689 = _0x52b0f4(this, function () {
    var _0x442b72
    try {
      var _0x3d5cf1 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x442b72 = _0x3d5cf1()
    } catch (_0x46a103) {
      _0x442b72 = window
    }
    var _0x418a1f = (_0x442b72.console = _0x442b72.console || {})
    var _0x3a61e6 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0xe8c3d1 = 0; _0xe8c3d1 < _0x3a61e6.length; _0xe8c3d1++) {
      var _0x19d02e = _0x52b0f4.constructor.prototype.bind(_0x52b0f4)
      var _0x3cc079 = _0x3a61e6[_0xe8c3d1]
      var _0x588a85 = _0x418a1f[_0x3cc079] || _0x19d02e
      _0x19d02e['__proto__'] = _0x52b0f4.bind(_0x52b0f4)
      _0x19d02e.toString = _0x588a85.toString.bind(_0x588a85)
      _0x418a1f[_0x3cc079] = _0x19d02e
    }
  })
_0x45a689()
;('use strict')
!(typeof Number.isNaN === 'function') ||
  (Number.isNaN = function isNaN(_0x10395e) {
    return (
      typeof _0x10395e === 'number' &&
      _0x10395e !== null &&
      (_0x10395e !== _0x10395e || +_0x10395e !== _0x10395e)
    )
  })
typeof Number.isFinite !== 'function' &&
  (Number.isFinite = function isFinite(_0x512a00) {
    if (typeof _0x512a00 !== 'number') {
      return false
    }
    if (
      _0x512a00 !== _0x512a00 ||
      _0x512a00 === Infinity ||
      _0x512a00 === -Infinity
    ) {
      return false
    }
    return true
  })
try {
  var grade = parseInt(prompt('What grade do you want to be? (1-8) '))
} catch (_0x18dc29) {
  var grade = NaN
}
!Number.isNaN(grade) &&
  Number.isFinite(grade) &&
  (grade > 8 || grade < 1
    ? alert('Invalid Choice, must be (1-8)!')
    : (Boot.prototype.game['_state']['_current'].user.source.grade = grade))
