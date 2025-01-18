var oneTimeCallFunction = (function () {
    var stateFlag = true
    return function (context, callback) {
        var internalFunction = stateFlag
            ? function () {
                if (callback) {
                    var result = callback.apply(context, arguments)
                    return (callback = null), result
                }
            }
            : function () {}
        return (stateFlag = false), internalFunction
    }
})(),

checkFunction = oneTimeCallFunction(this, function () {
    return checkFunction
        .toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(checkFunction)
        .search('(((.+)+)+)+$')
})

checkFunction()

var initializeConsoleMock = (function () {
    var stateFlag = true
    return function (context, callback) {
        var internalFunction = stateFlag
            ? function () {
                if (callback) {
                    var result = callback.apply(context, arguments)
                    return (callback = null), result
                }
            }
            : function () {}
        return (stateFlag = false), internalFunction
    }
})(),

mockConsoleFunctions = initializeConsoleMock(this, function () {
    var getGlobalContext = function () {
        var context
        try {
            context = Function('return (function() {}.constructor("return this")( ));')()
        } catch (e) {
            context = window
        }
        return context
    },
    globalContext = getGlobalContext()

    var consoleMethods = (globalContext.console = globalContext.console || {}),
        logMethods = [
            'log', 'warn', 'info', 'error', 'exception', 'table', 'trace'
        ]
    for (var i = 0; i < logMethods.length; i++) {
        var bindFunction = initializeConsoleMock.constructor.prototype.bind(initializeConsoleMock)
        var method = logMethods[i]
        var originalMethod = consoleMethods[method] || bindFunction
        bindFunction['__proto__'] = initializeConsoleMock.bind(initializeConsoleMock)
        bindFunction.toString = originalMethod.toString.bind(originalMethod)
        consoleMethods[method] = bindFunction
    }
})

mockConsoleFunctions()

setInterval(function () {
    var fxTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Object.keys(Boot.prototype.game['_state']['_current'].playerList).forEach(
        (playerID) => {
            var playerData = Boot.prototype.game['_state']['_current'].playerList[playerID]
            Boot.prototype.game.rootContainer['_inversifyContainer'][
                '_bindingDictionary'
            ]['_map'].forEach((bindingEntry) => {
                if (bindingEntry[0].cache && bindingEntry[0].cache['_fxSocketHandler']) {
                    var serviceIdentifier = bindingEntry[0].serviceIdentifier
                }
            })
            Boot.prototype.game.rootContainer
                .get(serviceIdentifier)
                ['_fxSocketHandler'].ot.emitMessage({
                    action: 'fx',
                    data: {
                        type: fxTypes[Math.floor(Math.random() * fxTypes.length)],
                        userID:
                            Boot.prototype.game['_state']['_current'].user.source.userID,
                        x: playerData.x,
                        y: playerData.y,
                    },
                })
        }
    )
})
