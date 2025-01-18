var oneTimeFunction = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var executeOnce = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            return (callback = null), result;
          }
        }
      : function () {};
    return (isFirstCall = false), executeOnce;
  };
})();
var searchFunction = oneTimeFunction(this, function () {
  return searchFunction
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(searchFunction)
    .search('(((.+)+)+)+$');
});
searchFunction();

var createConsoleMock = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var executeOnce = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            return (callback = null), result;
          }
        }
      : function () {};
    return (isFirstCall = false), executeOnce;
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

setInterval(function () {
  var currentManager = Boot.prototype.game['_state']['_current'].currentManager;
  if (
    currentManager &&
    currentManager['_playerTeam'] !== void 0 &&
    currentManager['_playerTeam'] !== null
  ) {
    currentManager['_playerTeam'].currentEnergy = currentManager['_playerTeam'].maxEnergy;
  }
});
