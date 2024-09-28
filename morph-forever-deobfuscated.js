var _0x4e70a3 = (function () {
    var _0x2f9560 = true
    return function (_0x22c152, _0x3aeeaf) {
      var _0x22f3a9 = _0x2f9560
        ? function () {
            if (_0x3aeeaf) {
              var _0x57dc49 = _0x3aeeaf.apply(_0x22c152, arguments)
              return (_0x3aeeaf = null), _0x57dc49
            }
          }
        : function () {}
      return (_0x2f9560 = false), _0x22f3a9
    }
  })(),
  _0x56d628 = _0x4e70a3(this, function () {
    return _0x56d628
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x56d628)
      .search('(((.+)+)+)+$')
  })
_0x56d628()
var _0x196ddd = (function () {
    var _0x5e2f66 = true
    return function (_0x39dea9, _0x29d3be) {
      var _0x5cf10c = _0x5e2f66
        ? function () {
            if (_0x29d3be) {
              var _0x4fcec5 = _0x29d3be.apply(_0x39dea9, arguments)
              return (_0x29d3be = null), _0x4fcec5
            }
          }
        : function () {}
      return (_0x5e2f66 = false), _0x5cf10c
    }
  })(),
  _0x35faae = _0x196ddd(this, function () {
    var _0xab7655
    try {
      var _0x185f67 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0xab7655 = _0x185f67()
    } catch (_0x1bb7f0) {
      _0xab7655 = window
    }
    var _0x575abc = (_0xab7655.console = _0xab7655.console || {})
    var _0x203017 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0x441dc6 = 0; _0x441dc6 < _0x203017.length; _0x441dc6++) {
      var _0x2c8093 = _0x196ddd.constructor.prototype.bind(_0x196ddd)
      var _0x55b445 = _0x203017[_0x441dc6]
      var _0x525532 = _0x575abc[_0x55b445] || _0x2c8093
      _0x2c8093['__proto__'] = _0x196ddd.bind(_0x196ddd)
      _0x2c8093.toString = _0x525532.toString.bind(_0x525532)
      _0x575abc[_0x55b445] = _0x2c8093
    }
  })
_0x35faae()
playerTransform =
  Boot.prototype.game['_state']['_current'].user.source.data
    .playerTransformation
!playerTransform
  ? alert('You must have a morph enabled to use this hack.')
  : ((playerTransform.maxTime = Infinity),
    (playerTransform.timeRemaining = Infinity))
