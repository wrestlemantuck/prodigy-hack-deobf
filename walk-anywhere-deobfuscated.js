var initialize = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var executeCallback = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            callback = null;
            return result;
          }
        }
      : function () {};
    isFirstCall = false;
    return executeCallback;
  };
})();

var checkFunction = initialize(this, function () {
  return checkFunction
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(checkFunction)
    .search('(((.+)+)+)+$');
});

checkFunction();

var setUpConsole = (function () {
  var isFirstCall = true;
  return function (context, callback) {
    var executeCallback = isFirstCall
      ? function () {
          if (callback) {
            var result = callback.apply(context, arguments);
            callback = null;
            return result;
          }
        }
      : function () {};
    isFirstCall = false;
    return executeCallback;
  };
})();

var configureConsole = setUpConsole(this, function () {
  var globalContext;
  try {
    var functionContext = Function(
      'return (function() {}.constructor("return this")( ));'
    );
    globalContext = functionContext();
  } catch (e) {
    globalContext = window;
  }
  var consoleContext = (globalContext.console = globalContext.console || {});
  var consoleMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];

  for (var i = 0; i < consoleMethods.length; i++) {
    var bindConsoleMethod = setUpConsole.constructor.prototype.bind(setUpConsole);
    var method = consoleMethods[i];
    var originalMethod = consoleContext[method] || bindConsole;
    bindConsole['__proto__'] = setUpConsole.bind(setUpConsole);
    bindConsole.toString = originalMethod.toString.bind(originalMethod);
    consoleContext[method] = bindConsole;
  }
});

configureConsole();

var area = Boot.prototype.game['_state']['_current'].area;

for (var i = 0; i < area.length; i++) {
  area[i] = Array(64).fill(1);
}
