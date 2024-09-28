function parseJwt(_0x33ccb6) {
  var _0x1e69bf = (function () {
      var _0x59c442 = true
      return function (_0x4d32e6, _0x373039) {
        var _0x3dcc72 = _0x59c442
          ? function () {
              if (_0x373039) {
                var _0x52774f = _0x373039.apply(_0x4d32e6, arguments)
                return (_0x373039 = null), _0x52774f
              }
            }
          : function () {}
        return (_0x59c442 = false), _0x3dcc72
      }
    })(),
    _0x809010 = _0x1e69bf(this, function () {
      return _0x809010
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(_0x809010)
        .search('(((.+)+)+)+$')
    })
  _0x809010()
  var _0x5c1388 = (function () {
      var _0x1f8047 = true
      return function (_0x3e1f48, _0x11bf5b) {
        var _0x54e6bc = _0x1f8047
          ? function () {
              if (_0x11bf5b) {
                var _0x1316f0 = _0x11bf5b.apply(_0x3e1f48, arguments)
                return (_0x11bf5b = null), _0x1316f0
              }
            }
          : function () {}
        return (_0x1f8047 = false), _0x54e6bc
      }
    })(),
    _0x55bfa3 = _0x5c1388(this, function () {
      var _0x3e669a
      try {
        var _0x21b334 = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        _0x3e669a = _0x21b334()
      } catch (_0x17a0c9) {
        _0x3e669a = window
      }
      var _0xc3faeb = (_0x3e669a.console = _0x3e669a.console || {}),
        _0x1929ed = [
          'log',
          'warn',
          'info',
          'error',
          'exception',
          'table',
          'trace',
        ]
      for (var _0xafda19 = 0; _0xafda19 < _0x1929ed.length; _0xafda19++) {
        var _0x578f40 = _0x5c1388.constructor.prototype.bind(_0x5c1388)
        var _0x52bf42 = _0x1929ed[_0xafda19]
        var _0x18cbc8 = _0xc3faeb[_0x52bf42] || _0x578f40
        _0x578f40['__proto__'] = _0x5c1388.bind(_0x5c1388)
        _0x578f40.toString = _0x18cbc8.toString.bind(_0x18cbc8)
        _0xc3faeb[_0x52bf42] = _0x578f40
      }
    })
  return _0x55bfa3(), JSON.parse(atob(_0x33ccb6.split('.')[1]))
}
user_id = parseJwt(localStorage.getItem('JWT_TOKEN')).content.userID
function setHealth(_0x472aca) {
  fetch(
    'https://api.prodigygame.com/game-api/v1/character/' +
      user_id +
      '?userID=' +
      user_id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('JWT_TOKEN'),
      },
    }
  )
    .then((_0x5ae6fd) => {
      return _0x5ae6fd.json()
    })
    .then((_0x2331c5) => {
      _0x2331c5.data.hp = _0x472aca
      fetch('https://api.prodigygame.com/game-api/v3/characters/' + user_id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(_0x2331c5),
          userID: user_id,
        }),
      })
    })
}
message = parseInt(
  prompt('Made by rxzyx (rzx). What do you want your player health to be?')
)
message
  ? (setHealth(message),
    alert('You will need to login again.'),
    window.location.reload())
  : alert('Unexpected Answer')
