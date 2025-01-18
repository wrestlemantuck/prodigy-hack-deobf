var createOneTimeFunction = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var onceFunction = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            return (callback = null), result;
          }
        }
      : function () {};
    return (isFirstCall = false), onceFunction;
  };
})();

var checkFunction = createOneTimeFunction(this, function () {
  return checkFunction
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(checkFunction)
    .search('(((.+)+)+)+$');
});
checkFunction();

var createConsoleMock = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var onceFunction = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            return (callback = null), result;
          }
        }
      : function () {};
    return (isFirstCall = false), onceFunction;
  };
})();

var enhanceConsoleMethods = createConsoleMock(this, function () {
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

  var consoleMethods = (globalContext.console = globalContext.console || {}),
    logMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];

  for (var i = 0; i < logMethods.length; i++) {
    var bindFunction = createConsoleMock.constructor.prototype.bind(createConsoleMock);
    var method = logMethods[i];
    var originalMethod = consoleMethods[method] || bindFunction;
    bindFunction['__proto__'] = createConsoleMock.bind(createConsoleMock);
    bindFunction.toString = originalMethod.toString.bind(originalMethod);
    consoleMethods[method] = bindFunction;
  }
});
enhanceConsoleMethods();

'use strict';

if (typeof Number.isNaN !== 'function') {
  Number.isNaN = function isNaN(value) {
    return (
      typeof value === 'number' &&
      value !== null &&
      (value !== value || +value !== value)
    );
  };
}

if (typeof Number.isFinite !== 'function') {
  Number.isFinite = function isFinite(value) {
    if (typeof value !== 'number') {
      return false;
    }
    if (value !== value || value === Infinity || value === -Infinity) {
      return false;
    }
    return true;
  };
}

try {
  var level = parseInt(prompt('What grade do you want to be? (x <= 100) '));
} catch (error) {
  var level = NaN;
}

if (!Number.isNaN(level) && Number.isFinite(level)) {
  if (level > 100) {
    alert('Invalid Choice, must be (x <= 100)!');
  } else {
    Boot.prototype.game['_state']['_current'].user.source.data.level = level;
    Boot.prototype.game['_state']['_current'].user.source.addWin();
  }
}
