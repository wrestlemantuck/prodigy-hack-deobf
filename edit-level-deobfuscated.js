var _0x192ab4 = (function () {
    var _0x351607 = true
    return function (_0x193818, _0xdb651) {
      var _0x42d37d = _0x351607
        ? function () {
            if (_0xdb651) {
              var _0x26bff5 = _0xdb651.apply(_0x193818, arguments)
              return (_0xdb651 = null), _0x26bff5
            }
          }
        : function () {}
      return (_0x351607 = false), _0x42d37d
    }
  })(),
  _0x3f52f3 = _0x192ab4(this, function () {
    return _0x3f52f3
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x3f52f3)
      .search('(((.+)+)+)+$')
  })
_0x3f52f3()
var _0x2c4aa3 = (function () {
    var _0x53f352 = true
    return function (_0x382965, _0x4dd8df) {
      var _0x518af1 = _0x53f352
        ? function () {
            if (_0x4dd8df) {
              var _0x2b5103 = _0x4dd8df.apply(_0x382965, arguments)
              return (_0x4dd8df = null), _0x2b5103
            }
          }
        : function () {}
      return (_0x53f352 = false), _0x518af1
    }
  })(),
  _0x40ffef = _0x2c4aa3(this, function () {
    var _0x23f54e = function () {
      var _0x5b3275 = {
        LnYkY: function (_0xcb9fd5, _0x27b7b2) {
          return _0xcb9fd5 !== _0x27b7b2
        },
        XUWvY: 'number',
        KAdZY: function (_0x12f8cd, _0x645aa2) {
          return _0x12f8cd !== _0x645aa2
        },
        lRcJe: function (_0x4ec7a7, _0x7db07f) {
          return _0x4ec7a7 === _0x7db07f
        },
        Ghhyf: function (_0x2a03, _0x26cfd5) {
          return _0x2a03 === _0x26cfd5
        },
      }
      var _0x5504c1
      try {
        _0x5504c1 = Function(
          'return (function() {}.constructor("return this")( ));'
        )()
      } catch (_0x3b75b5) {
        _0x5504c1 = window
      }
      return _0x5504c1
    }
    var _0x5b6bac = _0x23f54e()
    var _0xeb867 = (_0x5b6bac.console = _0x5b6bac.console || {}),
      _0x1ca9d4 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x3265dd = 0; _0x3265dd < _0x1ca9d4.length; _0x3265dd++) {
      var _0x588cdd = _0x2c4aa3.constructor.prototype.bind(_0x2c4aa3)
      var _0x3a70e6 = _0x1ca9d4[_0x3265dd]
      var _0x5b093a = _0xeb867[_0x3a70e6] || _0x588cdd
      _0x588cdd['__proto__'] = _0x2c4aa3.bind(_0x2c4aa3)
      _0x588cdd.toString = _0x5b093a.toString.bind(_0x5b093a)
      _0xeb867[_0x3a70e6] = _0x588cdd
    }
  })
_0x40ffef()
;('use strict')
!(typeof Number.isNaN === 'function') ||
  (Number.isNaN = function isNaN(_0x2c2f5a) {
    return (
      typeof _0x2c2f5a === 'number' &&
      _0x2c2f5a !== null &&
      (_0x2c2f5a !== _0x2c2f5a || +_0x2c2f5a !== _0x2c2f5a)
    )
  })
typeof Number.isFinite !== 'function' &&
  (Number.isFinite = function isFinite(_0x4f1888) {
    if (typeof _0x4f1888 !== 'number') {
      return false
    }
    if (
      _0x4f1888 !== _0x4f1888 ||
      _0x4f1888 === Infinity ||
      _0x4f1888 === -Infinity
    ) {
      return false
    }
    return true
  })
try {
  var level = parseInt(prompt('What grade do you want to be? (x <= 100) '))
} catch (_0x2a7663) {
  var level = NaN
}
!Number.isNaN(level) &&
  Number.isFinite(level) &&
  (level > 100
    ? alert('Invalid Choice, must be (x <= 100)!')
    : ((Boot.prototype.game['_state']['_current'].user.source.data.level =
        level),
      Boot.prototype.game['_state']['_current'].user.source.addWin()))
