// Arrows
"use strict";

var odds = evens.map(function (v) {
    return v + 1;
});

// Multiline strings
"In JavaScript this is\n not legal.";

// Generators
var fibonacci = (function () {
    var _fibonacci = {};
    _fibonacci[Symbol.iterator] = regeneratorRuntime.mark(function callee$1$0() {
        var pre, cur, temp;
        return regeneratorRuntime.wrap(function callee$1$0$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    pre = 0, cur = 1;

                case 1:
                    temp = pre;

                    pre = cur;
                    cur += temp;
                    context$2$0.next = 6;
                    return cur;

                case 6:
                    context$2$0.next = 1;
                    break;

                case 8:
                case "end":
                    return context$2$0.stop();
            }
        }, callee$1$0, this);
    });
    return _fibonacci;
})();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = fibonacci[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var n = _step.value;

        // truncate the sequence at 1000
        if (n > 1000) break;
        console.log(n);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator["return"]) {
            _iterator["return"]();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}