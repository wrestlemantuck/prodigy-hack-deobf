function quest(_0x2cc6b8, _0x5051bb) {
  var _0x4b93ac = (function () {
    var _0x4368dd = {
      LAXhY: '2|5|1|3|4|0',
      UWKWl: function (_0x4089b4, _0x455fd1) {
        return _0x4089b4 !== _0x455fd1
      },
      RVIRV: 'rTnwd',
      dPCAS: function (_0x56ee60, _0x19855e) {
        return _0x56ee60 !== _0x19855e
      },
      COysc: 'nJtYx',
      OxlIt: 'TRVux',
      vBBBP: function (_0x556f4a, _0x36a835) {
        return _0x556f4a !== _0x36a835
      },
      FQYRx: 'IYNgI',
      YaTsb: 'KHVoz',
    }
    var _0x349654 = true
    return function (_0x58d726, _0x2a2d9e) {
      if (_0x4368dd.vBBBP(_0x4368dd.FQYRx, _0x4368dd.YaTsb)) {
        var _0x4fb371 = _0x349654
          ? function () {
              if (_0x4368dd.UWKWl(_0x4368dd.RVIRV, _0x4368dd.RVIRV)) {
                _0x5059f8 = _0x40fb45
              } else {
                if (_0x2a2d9e) {
                  if (_0x4368dd.dPCAS(_0x4368dd.COysc, _0x4368dd.OxlIt)) {
                    var _0x47e9dd = _0x2a2d9e.apply(_0x58d726, arguments)
                    return (_0x2a2d9e = null), _0x47e9dd
                  } else {
                    if (_0x13c883) {
                      var _0x760d39 = _0x3ed1ce.apply(_0x144397, arguments)
                      return (_0x26c6b4 = null), _0x760d39
                    }
                  }
                }
              }
            }
          : function () {}
        return (_0x349654 = false), _0x4fb371
      } else {
        var _0x25af76 = _0x468a1c
          ? function () {
              if (_0x10f130) {
                var _0x1130bb = _0x375aa1.apply(_0x4e5572, arguments)
                return (_0x30a49f = null), _0x1130bb
              }
            }
          : function () {}
        return (_0x1bc249 = false), _0x25af76
      }
    }
  })()
  var _0x2d0383 = _0x4b93ac(this, function () {
    return _0x2d0383
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2d0383)
      .search('(((.+)+)+)+$')
  })
  _0x2d0383()
  var _0x2aaf90 = (function () {
    var _0x1bc313 = true
    return function (_0x1a2e82, _0x22e593) {
      var _0x5e2758 = _0x1bc313
        ? function () {
            if (_0x22e593) {
              var _0x4ab9c8 = _0x22e593.apply(_0x1a2e82, arguments)
              return (_0x22e593 = null), _0x4ab9c8
            }
          }
        : function () {}
      return (_0x1bc313 = false), _0x5e2758
    }
  })()
  var _0x358230 = _0x2aaf90(this, function () {
    var _0x3674bd = function () {
        var _0x55aea5
        try {
          _0x55aea5 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x456af5) {
          _0x55aea5 = window
        }
        return _0x55aea5
      },
      _0x11aef8 = _0x3674bd(),
      _0x5e21ea = (_0x11aef8.console = _0x11aef8.console || {})
    var _0x429450 = [
      'log',
      'warn',
      'info',
      'error',
      'exception',
      'table',
      'trace',
    ]
    for (var _0xe4b796 = 0; _0xe4b796 < _0x429450.length; _0xe4b796++) {
      var _0x4bc477 = _0x2aaf90.constructor.prototype.bind(_0x2aaf90)
      var _0x474d0d = _0x429450[_0xe4b796]
      var _0x4a3165 = _0x5e21ea[_0x474d0d] || _0x4bc477
      _0x4bc477['__proto__'] = _0x2aaf90.bind(_0x2aaf90)
      _0x4bc477.toString = _0x4a3165.toString.bind(_0x4a3165)
      _0x5e21ea[_0x474d0d] = _0x4bc477
    }
  })
  _0x358230()
  Boot.prototype.game['_state']['_current']['_world'].zones[
    _0x2cc6b8
  ].testQuest(_0x5051bb)
  try {
    Boot.prototype.game['_state']['_states'].get('TileScreen').process()
  } catch {
    null
  }
}
quest('house', 2)
quest('academy', 2)
var level = Boot.prototype.game['_state']['_current'].user.source.data.level
Boot.prototype.game['_state']['_current'].user.source.state.data.tutorial[0] = 4
Boot.prototype.game['_state']['_current'].user.source.backpack.addKeyItem(13, 0)
Boot.prototype.game['_state']['_current'].user.source.tutorial.data.menus[14] =
  [1]
Boot.prototype.game['_state']['_current'].user.source.onTutorialComplete()
Boot.prototype.game['_state']['_current'].user.source.data.level = Math.max(
  level,
  5
)
Boot.prototype.game['_state']['_current'].user.source.addWin()
