const ftoc = function(temperature) {
  let conversion = ((temperature - 32) * (5/9));
  return parseFloat(conversion.toFixed(1));
}

const ctof = function(temperature) {
  let conversion = ((temperature * (9/5)) + 32);
  return parseFloat(conversion.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
