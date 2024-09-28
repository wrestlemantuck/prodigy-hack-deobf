var _0x53b709 = (function () {
    var _0x119322 = true
    return function (_0x40c87e, _0x4a245b) {
      var _0x351b79 = _0x119322
        ? function () {
            if (_0x4a245b) {
              var _0x2b85ab = _0x4a245b.apply(_0x40c87e, arguments)
              return (_0x4a245b = null), _0x2b85ab
            }
          }
        : function () {}
      return (_0x119322 = false), _0x351b79
    }
  })(),
  _0xe160bc = _0x53b709(this, function () {
    return _0xe160bc
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0xe160bc)
      .search('(((.+)+)+)+$')
  })
_0xe160bc()
var _0x34cc83 = (function () {
  var _0x2f4c70 = true
  return function (_0x395274, _0x3f4b26) {
    var _0x44535a = _0x2f4c70
      ? function () {
          if (_0x3f4b26) {
            var _0x8916ec = _0x3f4b26.apply(_0x395274, arguments)
            return (_0x3f4b26 = null), _0x8916ec
          }
        }
      : function () {}
    return (_0x2f4c70 = false), _0x44535a
  }
})()
var _0x5d1d1e = _0x34cc83(this, function () {
  var _0x126d3c = function () {
    var _0x94d455
    try {
      _0x94d455 = Function(
        'return (function() {}.constructor("return this")( ));'
      )()
    } catch (_0x3252c9) {
      _0x94d455 = window
    }
    return _0x94d455
  }
  var _0x2990d6 = _0x126d3c(),
    _0x4d0892 = (_0x2990d6.console = _0x2990d6.console || {})
  var _0x142e0d = [
    'log',
    'warn',
    'info',
    'error',
    'exception',
    'table',
    'trace',
  ]
  for (var _0x19b907 = 0; _0x19b907 < _0x142e0d.length; _0x19b907++) {
    var _0x50d905 = _0x34cc83.constructor.prototype.bind(_0x34cc83)
    var _0x484bdb = _0x142e0d[_0x19b907]
    var _0x274ad1 = _0x4d0892[_0x484bdb] || _0x50d905
    _0x50d905['__proto__'] = _0x34cc83.bind(_0x34cc83)
    _0x50d905.toString = _0x274ad1.toString.bind(_0x274ad1)
    _0x4d0892[_0x484bdb] = _0x50d905
  }
})
_0x5d1d1e()
var confirm_alert = confirm(
  'CONFIRMATION! YOUR DATA WILL BE ERASED, ARE YOU SURE YOU WANT TO CONTINUE?'
)
if (confirm_alert) {
  game = Boot.prototype.game['_state']['_current'].user.source
  game.data.level = 1
  game.data.stars = 0
  game.data.storedMemberStars = 0
  game.updated = true
  var _0x285000 = {}
  _0x285000.zones = {}
  _0x285000.menus = {}
  game.tutorial.setData(_0x285000)
  game.tutorial.updated = true
  Object.entries(game.backpack.data).forEach(
    ([_0x50312c, _0x579fba]) => (_0x579fba.length = 0)
  )
  game.kennel['_petData'].length = 0
  game.name.init(game.appearance.getName(), game.appearance.getGender())
  game.equipment.clearData()
  game.state.data.tutorial = {}
  game.encounters.setData(null)
  game.state.data.world = {}
  game.state.data.breadcrumbs = {}
  game.state.data.keystones = null
  game.state.updated = true
}
