var firstExecution = (function () {
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
var searchExecution = firstExecution(this, function () {
  return searchExecution
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(searchExecution)
    .search('(((.+)+)+)+$');
});
searchExecution();

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

var confirmationAlert = confirm(
  'CONFIRMATION! YOUR DATA WILL BE ERASED, ARE YOU SURE YOU WANT TO CONTINUE?'
);
if (confirmationAlert) {
  var game = Boot.prototype.game['_state']['_current'].user.source;
  game.data.level = 1;
  game.data.stars = 0;
  game.data.storedMemberStars = 0;
  game.updated = true;
  
  var tutorialData = {};
  tutorialData.zones = {};
  tutorialData.menus = {};
  game.tutorial.setData(tutorialData);
  game.tutorial.updated = true;

  Object.entries(game.backpack.data).forEach(
    ([itemKey, itemValue]) => (itemValue.length = 0)
  );

  game.kennel['_petData'].length = 0;
  game.name.init(game.appearance.getName(), game.appearance.getGender());
  game.equipment.clearData();
  game.state.data.tutorial = {};
  game.encounters.setData(null);
  game.state.data.world = {};
  game.state.data.breadcrumbs = {};
  game.state.data.keystones = null;
  game.state.updated = true;
}
