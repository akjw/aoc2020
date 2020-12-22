const fs = require('fs'); 
  
fs.readFile('./input.txt', 'utf8', function(err, data){ 
  if (err) {
    throw err;
  }
    const lines = data.split("\n");
    const map = lines.map((line) => line.split(''));
    const increments = [[1,1], [3,1], [5,1], [7,1], [1,2]];
    let treesList = [];
  
    
    for(let i = 0; i < increments.length; i++){
      let increment = increments[i];
      let trees = countTrees(map, increment[0], increment[1]);
      treesList.push(trees);
    }
    const multiplyTrees = treesList.reduce((a, b)=> a*b, 1);
    console.log(`PART 1: Total number of trees is ${treesList[1]}`)
    console.log(`PART 2: Product of all trees is ${multiplyTrees}`)
}); 

function countTrees(map, colIncrement, rowIncrement){
  let row = 0;
  let col = 0;
  let trees = 0;
  while (row < map.length) {
    if (map[row][col] == '#') { 
      trees++;
    }
    col = (col + colIncrement) % map[0].length;
    row += rowIncrement;
  }
  return trees
}