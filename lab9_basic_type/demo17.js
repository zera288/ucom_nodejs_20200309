function mySum() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('a', 'b', '3'))
var x1 = function (a, b) {
    return a * b
}
console.log(x1(3, 5))