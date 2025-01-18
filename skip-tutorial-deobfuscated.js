function quest(zone, questId) {
  var securityCheck = (function () {
    var internalChecks = {
      LAXhY: '2|5|1|3|4|0',
      UWKWl: function (a, b) { return a !== b; },
      RVIRV: 'rTnwd',
      dPCAS: function (a, b) { return a !== b; },
      COysc: 'nJtYx',
      OxlIt: 'TRVux',
      vBBBP: function (a, b) { return a !== b; },
      FQYRx: 'IYNgI',
      YaTsb: 'KHVoz',
    };
    var isFirstExecution = true;
    return function (context, callback) {
      if (internalChecks.vBBBP(internalChecks.FQYRx, internalChecks.YaTsb)) {
        var executeOnce = isFirstExecution
          ? function () {
              if (internalChecks.UWKWl(internalChecks.RVIRV, internalChecks.RVIRV)) {
                _0x5059f8 = _0x40fb45;
              } else {
                if (callback) {
                  if (internalChecks.dPCAS(internalChecks.COysc, internalChecks.OxlIt)) {
                    var result = callback.apply(context, arguments);
                    return (callback = null), result;
                  } else {
                    if (_0x13c883) {
                      var secondaryResult = _0x3ed1ce.apply(_0x144397, arguments);
                      return (_0x26c6b4 = null), secondaryResult;
                    }
                  }
                }
              }
            }
          : function () {};
        return (isFirstExecution = false), executeOnce;
      } else {
        var fallbackExecution = isFirstExecution
          ? function () {
              if (_0x10f130) {
                var backupResult = _0x375aa1.apply(_0x4e5572, arguments);
                return (_0x30a49f = null), backupResult;
              }
            }
          : function () {};
        return (isFirstExecution = false), fallbackExecution;
      }
    };
  })();

  var securityValidator = securityCheck(this, function () {
    return securityValidator
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(securityValidator)
      .search('(((.+)+)+)+$');
  });
  securityValidator();

  var logEnhancer = (function () {
    var isFirstExecution = true;
    return function (context, callback) {
      var executeOnce = isFirstExecution
        ? function () {
            if (callback) {
              var result = callback.apply(context, arguments);
              return (callback = null), result;
            }
          }
        : function () {};
      return (isFirstExecution = false), executeOnce;
    };
  })();

  var consoleSetup = logEnhancer(this, function () {
    var getGlobalContext = function () {
      var globalContext;
      try {
        globalContext = Function('return (function() {}.constructor("return this")( ));')();
      } catch (e) {
        globalContext = window;
      }
      return globalContext;
    };

    var globalContext = getGlobalContext();
    var consoleMethods = (globalContext.console = globalContext.console || {});
    var logTypes = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    
    for (var i = 0; i < logTypes.length; i++) {
      var bindFunction = logEnhancer.constructor.prototype.bind(logEnhancer);
      var method = logTypes[i];
      var originalMethod = consoleMethods[method] || bindFunction;
      bindFunction['__proto__'] = logEnhancer.bind(logEnhancer);
      bindFunction.toString = originalMethod.toString.bind(originalMethod);
      consoleMethods[method] = bindFunction;
    }
  });

  consoleSetup();

  Boot.prototype.game['_state']['_current']['_world'].zones[zone].testQuest(questId);

  try {
    Boot.prototype.game['_state']['_states'].get('TileScreen').process();
  } catch {
    null;
  }
}

quest('house', 2);
quest('academy', 2);

var level = Boot.prototype.game['_state']['_current'].user.source.data.level;
Boot.prototype.game['_state']['_current'].user.source.state.data.tutorial[0] = 4;
Boot.prototype.game['_state']['_current'].user.source.backpack.addKeyItem(13, 0);
Boot.prototype.game['_state']['_current'].user.source.tutorial.data.menus[14] = [1];
Boot.prototype.game['_state']['_current'].user.source.onTutorialComplete();
Boot.prototype.game['_state']['_current'].user.source.data.level = Math.max(level, 5);
Boot.prototype.game['_state']['_current'].user.source.addWin();
