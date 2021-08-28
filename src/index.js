
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrixCopy = matrix;
  if (!matrixCopy) return [];
  for (let i = 1; i < matrixCopy.length; i+=2) {
      matrixCopy[i].reverse();
  }
  return matrixCopy.flat();
}
