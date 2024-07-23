const fibonacci = function(n) {
    if ((n == 0) || (n === 1)) {
        return 1;
    }

    arr = [1, 1]
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
