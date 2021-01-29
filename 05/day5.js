const fs = require('fs'); 

async function getInput (){
  const input = fs.readFileSync('./input.txt').toString();
  return input.split('\n');
} 

async function processInput (){
  const boardingPasses = await getInput();
  const ids = boardingPasses.map(getId);
  // Math.max doesn't accept arrays, so use spread operator
  const part1Ans = Math.max(...ids);
  console.log(`Highest seat ID on a boarding pass is ${part1Ans}`);
  const sortedIds = ids.sort((x, y) => x - y);
  // start from 1, end before last, since we are told the seat isn't 
  // at the very front or back
  for (let i = 1; i < sortedIds.length - 1; i++) {
    const currentID = sortedIds[i];
    const nextID = sortedIds[i + 1];

    if (currentID + 1 !== nextID) {
      console.log(`Your ID is ${currentID + 1}`);
    }
  }
}

function getId (str){
  const rowStr = str.slice(0, 7);
  const colStr = str.slice(7);
  const row = binarySearch(rowStr, 'B', 'F', 128);
  const col = binarySearch(colStr, 'R', 'L', 8);
  return row * 8 + col;
}

function binarySearch (str, upperToken, lowerToken, maxNum) {
  let upper = maxNum;
  let lower = 0;
  for (let c of str){
    const midpt = Math.floor((upper + lower) / 2);
    if (c === upperToken){
      lower = midpt;
    } else if (c === lowerToken) {
      upper = midpt;
    }
  }
  return lower;
}

processInput();
