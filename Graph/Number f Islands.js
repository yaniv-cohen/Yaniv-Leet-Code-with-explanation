/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  let islandCount = 0;
    //loop over every cell
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // console.log(`grid[${row}][${col}], ${currentCell}`);
        //if found, new land, not zero or marked
      if (grid[row][col] === "1") {
        //go over all neighbors, if not marked, call again, and mark each cell
          //mark this land as visited
        grid[row][col] = null;
          //mark it's neightbors recursively
        handleUnmarkedNeighbor(row, col);
        islandCount++;
      }
    }
  }
return islandCount
    
    //called on new land, marks all neighboring land cells and calls itself again ith the neighbor's coordinates
  function handleUnmarkedNeighbor(row, col) {
     // console.log('handleUnmarkedNeighbor', row, col, '    count:',islandCount)
    if (col > 0) {
      if (grid[row][col - 1] === "1") {
        grid[row][col- 1] = null;
        handleUnmarkedNeighbor(row, col - 1);
      }
    }
    if (col < colCount - 1) {
      if (grid[row][col + 1] === "1") {
        grid[row][col + 1] = null;
        handleUnmarkedNeighbor(row, col + 1);
      }
    }
      if (row > 0) {
        if (grid[row - 1][col] === "1") {
          grid[row- 1][col] = null;
          handleUnmarkedNeighbor(row - 1, col);
        }
      }
      if (row < rowCount - 1) {
        if (grid[row + 1][col] === "1") {
          grid[row+ 1][col] = null;
          handleUnmarkedNeighbor(row + 1, col);
        }
      }
  }
};
