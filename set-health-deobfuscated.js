function parseJwt(token) {
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
    var consoleMethods = (globalContext.console = globalContext.console || {});
    var logMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];

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

  return JSON.parse(atob(token.split('.')[1]));
}

var userId = parseJwt(localStorage.getItem('JWT_TOKEN')).content.userID;

function setHealth(healthValue) {
  fetch(
    'https://api.prodigygame.com/game-api/v1/character/' + userId + '?userID=' + userId,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('JWT_TOKEN'),
      },
    }
  )
    .then(response => response.json())
    .then(data => {
      data.data.hp = healthValue;
      fetch('https://api.prodigygame.com/game-api/v3/characters/' + userId, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('JWT_TOKEN'),
          Accept: 'application/json',
        },
        body: JSON.stringify({
          data: JSON.stringify(data),
          userID: userId,
        }),
      });
    });
}

var healthInput = parseInt(
  prompt('Made by rxzyx (rzx) DEOBFED BY WRESTLE. What do you want your player health to be?')
);

if (healthInput) {
  setHealth(healthInput);
  alert('You will need to login again.');
  window.location.reload();
} else {
  alert('Unexpected Answer');
}
