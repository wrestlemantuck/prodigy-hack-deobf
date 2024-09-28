function parseJwt(_0x12444b) {
  return JSON.parse(atob(_0x12444b.split('.')[1]))
}
user_id = Boot.prototype.game['_state']['_current'].user.source.userID
var hp = Boot.prototype.game['_state']['_current'].user.source.data.hp
function unlockPets(_0x3241e5 = 100) {
  var _0x4aa5fb = (function () {
    var _0x1241db = true
    return function (_0x40373a, _0x3dc4f9) {
      var _0x379b02 = _0x1241db
        ? function () {
            if (_0x3dc4f9) {
              var _0x4800c2 = _0x3dc4f9.apply(_0x40373a, arguments)
              return (_0x3dc4f9 = null), _0x4800c2
            }
          }
        : function () {}
      return (_0x1241db = false), _0x379b02
    }
  })()
  var _0x1df499 = _0x4aa5fb(this, function () {
    return _0x1df499
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x1df499)
      .search('(((.+)+)+)+$')
  })
  _0x1df499()
  var _0x583797 = (function () {
    var _0x2e3ce8 = true
    return function (_0x1e01b9, _0x4b8b3a) {
      var _0x46d020 = _0x2e3ce8
        ? function () {
            if (_0x4b8b3a) {
              var _0x885479 = _0x4b8b3a.apply(_0x1e01b9, arguments)
              return (_0x4b8b3a = null), _0x885479
            }
          }
        : function () {}
      return (_0x2e3ce8 = false), _0x46d020
    }
  })()
  var _0x91f4df = _0x583797(this, function () {
    var _0x4737b6
    try {
      var _0x23f971 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x4737b6 = _0x23f971()
    } catch (_0x1717d4) {
      _0x4737b6 = window
    }
    var _0x46936b = (_0x4737b6.console = _0x4737b6.console || {}),
      _0x559024 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (var _0x2de9ea = 0; _0x2de9ea < _0x559024.length; _0x2de9ea++) {
      var _0x56535d = _0x583797.constructor.prototype.bind(_0x583797)
      var _0x5b7393 = _0x559024[_0x2de9ea]
      var _0x1fdc89 = _0x46936b[_0x5b7393] || _0x56535d
      _0x56535d['__proto__'] = _0x583797.bind(_0x583797)
      _0x56535d.toString = _0x1fdc89.toString.bind(_0x1fdc89)
      _0x46936b[_0x5b7393] = _0x56535d
    }
  })
  _0x91f4df()
  fetch(
    'https://api.prodigygame.com/game-api/v1/character/' +
      user_id +
      '?userID=' +
      user_id,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.getItem('JWT_TOKEN'),
      },
    }
  )
    .then((_0x5df783) => {
      return _0x5df783.json()
    })
    .then((_0x1e6a91) => {
      function _0x5757ee(_0x5a5c05 = true) {
        return (
          (e = []),
          Boot.prototype.game['_state']['_states']
            .get('Boot')
            ['_gameData'].pet.forEach((_0x1b7700) => {
              if (_0x5a5c05) {
                e.push(
                  '{"levelCaught":' +
                    _0x1e6a91.data.level +
                    ',"ID":"' +
                    _0x1b7700.ID +
                    '","stars":99999,"catchDate":' +
                    Date.now() +
                    ',"level":' +
                    _0x3241e5 +
                    ',"foreignSpells":[61,67,55,58,70,81,75,78]}'
                )
              } else {
                e.push(
                  '{"firstSeenDate":' +
                    Date.now() +
                    ',"ID":' +
                    _0x1b7700.ID +
                    ',"timesBattled":1,"timesRescued":1}'
                )
              }
            }),
          '[' + e.join(',') + ']'
        )
      }
      pet_maker = _0x5757ee()
      pet_maker2 = _0x5757ee(false)
      _0x1e6a91.pets = JSON.parse(pet_maker)
      _0x1e6a91.encounters.pets = JSON.parse(pet_maker2)
      fetch('https://api.prodigygame.com/game-api/v3/characters/' + user_id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: sessionStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(_0x1e6a91),
          userID: user_id,
        }),
      })
    })
}
message = parseInt(
  prompt(
    'Made by rxzyx (rzx). Unlocking all pets, what level do you want them to be?'
  )
)
message
  ? (unlockPets(message),
    alert('You will need to login again.'),
    window.location.reload())
  : alert('Unexpected Answer')
