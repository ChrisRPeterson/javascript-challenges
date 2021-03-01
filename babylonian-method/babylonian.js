const squareRoot = (radicand) => {
  var guess = radicand * 0.25;
  console.log(radicand);

  while (radicand / guess !== guess) {
    console.log(guess);
    var guess = (guess * (radicand / guess)) / 2;
  }
  return guess;
}

module.exports = squareRoot;
