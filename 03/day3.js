const fs = require('fs'); 
  
fs.readFile('./input.txt', 'utf8', function(err, data){ 
  if (err) {
    throw err;
  }
    const lines = data.split("\n");
    const map = lines.map((line) => line.split(''))
    console.log(map[0][0])
    let trees = 0;
    let row = 0;
    let col = 0;
    
    while (row < map.length) {
      if (map[row][col] == '#') { 
        trees++;
      }

      col = (col + 3) % map[0].length;
      row += 1;
    }
    console.log(trees)
}); 