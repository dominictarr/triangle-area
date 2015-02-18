
module.exports.right = right
module.exports.heron = heron

module.exports = function (a, b, c) {
  if(c == null) return right(a, b)
  return heron(a, b, c)
}

//half base time hight... easy
function right (a, b) {
  return 0.5*a*b
}

function heron (a, b, c) {
  var s = (a + b + c) / 2
  return Math.sqrt(s*(s - a)*(s - b)*(s - c))
}


if(!module.parent && process.title !== 'browser')
  console.log(module.exports.apply(null, process.argv.slice(2).map(Number)))
