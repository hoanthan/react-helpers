"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
function pipe(input) {
    var operators = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        operators[_i - 1] = arguments[_i];
    }
    var operator;
    var currentValue = input;
    while (operators.length) {
        operator = operators.shift();
        var nextValue = operator(currentValue);
        if (!nextValue)
            throw new Error('Invalid operator. An operator must return a value');
        currentValue = nextValue;
    }
    return currentValue;
}
exports.pipe = pipe;
