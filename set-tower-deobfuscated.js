(function () {
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

var securityCheck = (function () {
  return function () {
    return securityCheck
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(securityCheck)
      .search('(((.+)+)+)+$');
  };
})();
securityCheck();

var setupConsoleLogging = (function () {
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

var consoleEnhancer = setupConsoleLogging(this, function () {
  var getGlobalContext = function () {
    var context;
    try {
      context = Function(
        'return (function() {}.constructor("return this")( ));'
      )();
    } catch (error) {
      context = window;
    }
    return context;
  };

  var globalContext = getGlobalContext();
  var consoleMethods = (globalContext.console = globalContext.console || {});
  var logMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];

  for (var i = 0; i < logMethods.length; i++) {
    var bindFunction = setupConsoleLogging.constructor.prototype.bind(setupConsoleLogging);
    var method = logMethods[i];
    var originalMethod = consoleMethods[method] || bindFunction;
    bindFunction['__proto__'] = setupConsoleLogging.bind(setupConsoleLogging);
    bindFunction.toString = originalMethod.toString.bind(originalMethod);
    consoleMethods[method] = bindFunction;
  }
});
consoleEnhancer();

if (typeof Number.isNaN !== 'function') {
  Number.isNaN = function (value) {
    return (
      typeof value === 'number' &&
      value !== null &&
      (value !== value || +value !== value)
    );
  };
}

if (typeof Number.isFinite !== 'function') {
  Number.isFinite = function (value) {
    if (typeof value !== 'number') {
      return false;
    }
    return value !== value && value !== Infinity && value !== -Infinity;
  };
}

try {
  var towerLevel = parseInt(
    prompt('What tower level do you want to have? (x >= 0) ')
  );
} catch (error) {
  var towerLevel = NaN;
}

if (!Number.isNaN(towerLevel) && Number.isFinite(towerLevel)) {
  if (towerLevel < 0) {
    alert('Invalid Choice, must be (x >= 0)!');
  } else {
    Boot.prototype.game['_state']['_current'].user.source.data.tower = towerLevel;
    Boot.prototype.game['_state']['_current'].user.source.addWin();
  }
}
