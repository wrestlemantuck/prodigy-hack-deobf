function unlockWeapons(_0x3cdd19 = 99, _0x3233ac = 9999) {
  var _0x38dc9c = (function () {
      var _0x5e42e3 = true
      return function (_0x9bb987, _0x46d44a) {
        var _0x453133 = _0x5e42e3
          ? function () {
              if (_0x46d44a) {
                var _0xb582a9 = _0x46d44a.apply(_0x9bb987, arguments)
                return (_0x46d44a = null), _0xb582a9
              }
            }
          : function () {}
        return (_0x5e42e3 = false), _0x453133
      }
    })(),
    _0x2dbfcd = (function () {
      var _0xc4ed62 = true
      return function (_0x470c2d, _0x293218) {
        var _0x1903f5 = _0xc4ed62
          ? function () {
              if (_0x293218) {
                var _0x4f9c63 = _0x293218.apply(_0x470c2d, arguments)
                return (_0x293218 = null), _0x4f9c63
              }
            }
          : function () {}
        return (_0xc4ed62 = false), _0x1903f5
      }
    })()
  function _0x1d8024(_0x3285ec, _0x223d0a = false) {
    var _0x24da1c = _0x38dc9c(this, function () {
      return _0x24da1c
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x24da1c)
        .search('(((.+)+)+)+$')
    })
    _0x24da1c()
    var _0x33668c = _0x2dbfcd(this, function () {
      var _0x17eeec = function () {
          var _0xfa2fed
          try {
            _0xfa2fed = Function(
              'return (function() {}.constructor("return this")( ));'
            )()
          } catch (_0x3ebba3) {
            _0xfa2fed = window
          }
          return _0xfa2fed
        },
        _0x1b23ce = _0x17eeec(),
        _0x312f13 = (_0x1b23ce.console = _0x1b23ce.console || {}),
        _0x129449 = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0x560a5c = 0; _0x560a5c < _0x129449.length; _0x560a5c++) {
        var _0x5db8bb = _0x2dbfcd.constructor.prototype.bind(_0x2dbfcd)
        var _0x17faee = _0x129449[_0x560a5c]
        var _0x4373f1 = _0x312f13[_0x17faee] || _0x5db8bb
        _0x5db8bb['__proto__'] = _0x2dbfcd.bind(_0x2dbfcd)
        _0x5db8bb.toString = _0x4373f1.toString.bind(_0x4373f1)
        _0x312f13[_0x17faee] = _0x5db8bb
      }
    })
    _0x33668c()
    e = []
    if (_0x223d0a) {
      the_cur = _0x3233ac
    } else {
      the_cur = _0x3cdd19
    }
    return (
      _0x3285ec.forEach((_0x476dd5) => {
        e.push('{"N":"' + the_cur + '","ID":' + _0x476dd5.ID + '}')
      }),
      '[' + e.join(',') + ']'
    )
  }
  var _0x2c810e =
      Boot.prototype.game['_state']['_states'].get('Boot')['_gameData'],
    _0x20c922 = Boot.prototype.game['_state']['_current'].user.source.backpack
  all_weps = _0x1d8024(_0x2c810e.weapon)
  all_outfits = _0x1d8024(_0x2c810e.outfit)
  all_hats = _0x1d8024(_0x2c810e.hat)
  all_relic = _0x1d8024(_0x2c810e.relic)
  all_fossil = _0x1d8024(_0x2c810e.fossil)
  all_items = _0x1d8024(_0x2c810e.item)
  all_boots = _0x1d8024(_0x2c810e.boots)
  all_spell_relics = _0x1d8024(_0x2c810e.spellRelic)
  all_currency = _0x1d8024(_0x2c810e.currency, true)
  all_follow = _0x1d8024(_0x2c810e.follow)
  all_mount = _0x1d8024(_0x2c810e.mount)
  all_mathInt = _0x1d8024(_0x2c810e.mathTownInterior)
  all_mathTownFrame = _0x1d8024(_0x2c810e.mathTownFrame)
  all_key = _0x1d8024(_0x2c810e.key)
  all_emotes = _0x1d8024(_0x2c810e.emote)
  Boot.prototype.game['_state']['_current'].user.source.house.data.items = {}
  var _0x290840 = {
    A: [],
    N: _0x3cdd19,
  }
  Boot.prototype.game['_state']['_states']
    .get('Boot')
    ['_gameData'].dorm.forEach(
      (_0x403205) =>
        (Boot.prototype.game['_state']['_current'].user.source.house.data.items[
          _0x403205.ID
        ] = _0x290840)
    )
  _0x20c922.data.weapon = JSON.parse(all_weps)
  _0x20c922.data.item = JSON.parse(all_items)
  _0x20c922.data.outfit = JSON.parse(all_outfits)
  _0x20c922.data.relic = JSON.parse(all_relic)
  _0x20c922.data.boots = JSON.parse(all_boots)
  _0x20c922.data.hat = JSON.parse(all_hats)
  _0x20c922.data.currency = JSON.parse(all_currency)
  _0x20c922.data.fossil = JSON.parse(all_fossil)
  _0x20c922.data.follow = JSON.parse(all_follow)
  _0x20c922.data.mount = JSON.parse(all_mount)
  _0x20c922.data.key = JSON.parse(all_key)
  _0x20c922.data.spellRelic = JSON.parse(all_spell_relics)
}
message1 = parseInt(
  prompt('Made by rxzyx (rzx). How many much of every weapon do you want?')
)
message2 = parseInt(
  prompt('Made by rxzyx (rzx). How many much of every currency do you want?')
)
message1 && message2
  ? (unlockWeapons(message1, message2), alert('Done, made by rxzyx (rzx).'))
  : alert('Unexpected Answer')
