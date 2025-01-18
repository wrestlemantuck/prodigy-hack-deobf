(function () {
    let isFirstRun = true;
    return function (context, callback) {
        let innerFunction = isFirstRun
            ? function () {
                if (callback) {
                    const callbackResult = callback.apply(context, arguments);
                    callback = null;
                    return callbackResult;
                }
            }
            : function () {};

        isFirstRun = false;
        return innerFunction;
    };
})();

(function () {
    let isFirstRun = true;
    return function (context, callback) {
        let innerFunction = isFirstRun
            ? function () {
                if (callback) {
                    const callbackResult = callback.apply(context, arguments);
                    callback = null;
                    return callbackResult;
                }
            }
            : function () {};

        isFirstRun = false;
        return innerFunction;
    };
})();

(function () {
    let globalContext;
    try {
        const executeFunction = Function('return (function() {}.constructor("return this")( ));');
        globalContext = executeFunction();
    } catch (error) {
        globalContext = window;
    }
    const console = (globalContext.console = globalContext.console || {});
    const logMethods = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];

    logMethods.forEach(method => {
        const boundFunction = Function.prototype.bind.call(console[method] || function () {}, console);
        console[method] = boundFunction;
    });
})();

Boot.prototype.game['_state']['_current'].user.source.canSpin = function () {
    return true;
};
