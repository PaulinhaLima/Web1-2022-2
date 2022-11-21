// Header Size function

function headerSize(width = 300, height = 600) {
  const shortSide = Math.min(width, height);
  const ratio = width / height;
  const y = 2 + 9 * ratio;
  const hSize = (ratio * shortSide) / y;
  return hSize;
}

console.log(headerSize());