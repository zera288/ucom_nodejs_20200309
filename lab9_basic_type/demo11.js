var x1 = {name:'Mark Ho',role:'engineer',grade:6}
var j1 = JSON.stringify(x1)
var x2 = ['Sunday','Monday','Tuesday']
var j2 = JSON.stringify(x2)
console.log(typeof x1, typeof j1, typeof x2, typeof j2)
console.log(x1, j1)
console.log(x2, j2)
var o1 = JSON.parse(j1)
var o2 = JSON.parse(j2)
console.log(Array.isArray(o1), typeof o1, o1)
console.log(Array.isArray(o2), typeof o2, o2)