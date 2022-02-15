
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return []
      }
      else if (matrix.length > 0) {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            let columnIndex = i % 2 === 0 ? j : matrix[i].length - j - 1;
            //   console.log (matrix[i][columnIndex]);
            arr.push(matrix[i][columnIndex]);
          }
        }
        return arr;
      } else  {
        return []
      }
     
}
