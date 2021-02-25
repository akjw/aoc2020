const fs = require('fs'); 

async function getInput (){
  const input = await fs.readFileSync('./input.txt').toString();
  return input.split('\n\n');
} 

async function getSums (){
  const groups = await getInput();
  let uniqueSum = 0;
  let commonSum = 0;
  for (let group of groups) {
    // ["ifh", "fhiw"]
    const people = group.split('\n');
    let uniqueQns = new Set();
    // needs to be initiated with values; empty set will always return 0 for intersection
    let commonQns = new Set(people[0]);
    for (let person of people) {
      // Set(3) {'i', 'f', 'h'}
      const personQns = new Set(person);
      // reassign uniqueQns
      uniqueQns = getUniqueQns(uniqueQns, personQns);
      commonQns = getCommonQns(commonQns, personQns);
    }
    uniqueSum += uniqueQns.size;
    commonSum += commonQns.size;
  }
  console.log(`Part 1: ${uniqueSum}.`);
  console.log(`Part 2: ${commonSum}.`);
};

// Find set union
function getUniqueQns (set1, set2){
  // temporary set to store common values
  const allYesQns = new Set();

  for (let qn of set1) {
    allYesQns.add(qn);
  }

  // only qn numbers not already in allYesQns will be added 
  for (let qn of set2) {
    allYesQns.add(qn);
  }

  // union of the 2 sets
  return allYesQns;
};

// Find set intersection
function getCommonQns (set1, set2){
  const newSet = new Set();

  for (let qn of set1) {
    if (set2.has(qn)) {
      newSet.add(qn);
    }
  }

  return newSet;
};

getSums();