const fs = require('fs'); 
  
fs.readFile('./input.txt', 'utf8', function(err, data){ 
  if (err) {
    throw err;
  }
    const input = data.split("\n");
    const { part1, part2 } = runValidityChecks(input);
    console.log(`PART 1: There are ${part1} valid passwords.`)
    console.log(`PART 2: There are ${part2} valid passwords.`)

}); 

function runValidityChecks(input){
  let numValidPasswords1 = 0; 
  let numValidPasswords2 = 0; 
   for (let line in input) {
     let policyAndPassword = input[line].split(':');
     let password = policyAndPassword[1];
     let rangeAndChar = policyAndPassword[0].split(' ');
     let indices = rangeAndChar[0].split('-');
     let firstIndex = indices[0];
     let secondIndex = indices[1];
     let char = rangeAndChar[1];
  
     if(isValid(password, firstIndex, secondIndex, char)){
       numValidPasswords1++;
     }
     if(isValid2(password, firstIndex, secondIndex, char)){
       numValidPasswords2++;
     }
   }
   return {part1: numValidPasswords1, part2: numValidPasswords2}
}

function isValid(pw, min, max, char){
  let count = countFrequency(pw, char)
  return count >= min && count <= max
}

function countFrequency(pw, char){
  let count = 0;
  for(let i = 0; i < pw.length; i++){
    if (pw[i] == char){
      count++;
    }
  }
  return count
}

function isValid2(pw, fst, snd, char){
  let existsAtFirst = false;
  let existsAtSecond = false;
  if(pw[fst] == char){
    existsAtFirst = true;
  }
  if(pw[snd] == char){
    existsAtSecond = true;
  }
  return existsAtFirst != existsAtSecond
}