var _0x513cbf = (function () {
    var _0xf28543 = true
    return function (_0x144a76, _0xf67c8c) {
      var _0x323d65 = _0xf28543
        ? function () {
            if (_0xf67c8c) {
              var _0x505522 = _0xf67c8c.apply(_0x144a76, arguments)
              return (_0xf67c8c = null), _0x505522
            }
          }
        : function () {}
      return (_0xf28543 = false), _0x323d65
    }
  })(),
  _0x510b62 = _0x513cbf(this, function () {
    return _0x510b62
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x510b62)
      .search('(((.+)+)+)+$')
  })
_0x510b62()
var _0x1ebf3f = (function () {
    var _0x50dfb3 = true
    return function (_0x40b86a, _0x6bafae) {
      var _0x33193c = _0x50dfb3
        ? function () {
            if (_0x6bafae) {
              var _0x3b03c0 = _0x6bafae.apply(_0x40b86a, arguments)
              return (_0x6bafae = null), _0x3b03c0
            }
          }
        : function () {}
      return (_0x50dfb3 = false), _0x33193c
    }
  })(),
  _0x1673b9 = _0x1ebf3f(this, function () {
    var _0x42417e = function () {
        var _0x203d23
        try {
          _0x203d23 = Function(
            'return (function() {}.constructor("return this")( ));'
          )()
        } catch (_0x183e1b) {
          _0x203d23 = window
        }
        return _0x203d23
      },
      _0x5929d9 = _0x42417e()
    var _0x57c85f = (_0x5929d9.console = _0x5929d9.console || {}),
      _0x17d82e = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x3b970d = 0; _0x3b970d < _0x17d82e.length; _0x3b970d++) {
      var _0x3e38a7 = _0x1ebf3f.constructor.prototype.bind(_0x1ebf3f)
      var _0x56c135 = _0x17d82e[_0x3b970d]
      var _0x54e67d = _0x57c85f[_0x56c135] || _0x3e38a7
      _0x3e38a7['__proto__'] = _0x1ebf3f.bind(_0x1ebf3f)
      _0x3e38a7.toString = _0x54e67d.toString.bind(_0x54e67d)
      _0x57c85f[_0x56c135] = _0x3e38a7
    }
  })
_0x1673b9()
setInterval(function () {
  var _0x2354a9 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  Object.keys(Boot.prototype.game['_state']['_current'].playerList).forEach(
    (_0xcd6192) => {
      p = Boot.prototype.game['_state']['_current'].playerList[_0xcd6192]
      Boot.prototype.game.rootContainer['_inversifyContainer'][
        '_bindingDictionary'
      ]['_map'].forEach((_0x5a95fe) => {
        if (_0x5a95fe[0].cache && _0x5a95fe[0].cache['_fxSocketHandler']) {
          user_name = _0x5a95fe[0].serviceIdentifier
        }
      })
      Boot.prototype.game.rootContainer
        .get(user_name)
        ['_fxSocketHandler'].ot.emitMessage({
          action: 'fx',
          data: {
            type: _0x2354a9[Math.floor(Math.random() * _0x2354a9.length)],
            userID:
              Boot.prototype.game['_state']['_current'].user.source.userID,
            x: p.x,
            y: p.y,
          },
        })
    }
  )
})
