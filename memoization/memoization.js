var fibonacci = (function () {
    var memo = {};
    var fib = function (num) {
        var value;

        if (num in memo) {
            value = memo[num];
        } else {
            if (num === 0 || num === 1)
                value = num;
            else
                value = fib(num - 1) + fib(num - 2);

            memo[num] = value;
        }

        return value;
    };

    return fib;
}());