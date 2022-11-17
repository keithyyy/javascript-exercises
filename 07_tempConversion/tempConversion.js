const ftoc = function(faren) {
  let celcius = (faren - 32) * 5/9
  let rounded = Math.round(celcius * 10) / 10
  return rounded
};

const ctof = function(celc) {
  let fahren = celc * 9/5 + 32
  let rounded = Math.round(fahren * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
