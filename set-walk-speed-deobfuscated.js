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

var userWalkSpeed = prompt('What do you want your walkspeed to be?');
if (userWalkSpeed === null) {
  alert('Not a valid answer.');
} else {
  userWalkSpeed = parseFloat(userWalkSpeed);
  Boot.prototype.game['_state']['_current'].user.walkSpeed = userWalkSpeed;
}
