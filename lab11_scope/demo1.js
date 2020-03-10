console.log(x2)
//console.log(x1)
var x2 = 'world'
x1 = 'hello'
console.log(typeof x1, typeof x2)
console.log(x1, x2)
function printMessage() {
    console.log( 'inside printmessage',x1, x2)
}
printMessage()