const fs = require('fs'); 

const input = fs.readFileSync('./input.txt').toString().split('\n\n');
let numValidPassports = 0;

function runValidityChecks(input){
  let count = 0;
  let max = 7;

  const passport = input.split('\n')
                        .join(' ')
                        .split(' ')
                        .map((x) => x.split(':'))
                        .reduce((obj, [key, val]) => {
                          obj[key] = val;
                          return obj;
                        }, {});

  Object.keys(passport).forEach((key) => {
    switch (key) {
      case 'byr': {
        if (
          (passport[key].length === 4)
          && (+passport[key] >= 1920)
          && (+passport[key] <= 2002)
        ) {
          count += 1;
        }
        break;
      }
      case 'iyr': {
        if (
          (passport[key].length === 4)
          && (+passport[key] >= 2010)
          && (+passport[key] <= 2020)
        ) {
          count += 1;
        }
        break;
      }
      case 'eyr': {
        if (
          (passport[key].length === 4)
          && (+passport[key] >= 2020)
          && (+passport[key] <= 2030)
        ) {
          count += 1;
        }
        break;
      }
      case 'hgt': {
        const unit = passport[key].slice(-2);
        const value = passport[key].slice(0, -2);
        if (unit === 'cm') {
          if (+value >= 150 && +value <= 193) {
            count += 1;
          }
        }
        if (unit === 'in') {
          if (+value >= 59 && +value <= 76) {
            count += 1;
          }
        }
        break;
      }
      case 'hcl': {
        if (passport[key].match(/^#[A-Fa-f0-9]{6}$/)) {
          count += 1;
        }
        break;
      }
      case 'ecl': {
        if (['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport[key].toLowerCase())) {
          count += 1;
        }
        break;
      }
      case 'pid': {
        if (passport[key].match(/^[0-9]{9}$/)) {
          count += 1;
        }
        break;
      }
      default: {
        break;
      }
    }
  });

  if (count === max) {
    return true;
  }
  return false;
}


input.forEach((passport) => {
  if(runValidityChecks(passport)) numValidPassports++;
})

console.log(`PART 2: There are ${numValidPassports} valid passports.`)