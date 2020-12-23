const fs = require('fs'); 
  
fs.readFile('./input.txt', 'utf8', function(err, data){ 
  if (err) {
    throw err;
  }
    const passports = data.split("\n\n");
    let currentPassport = '';
    let numValidFields = 0;
    let numValidPassports = 0;
    const requiredFields = ["byr:", "iyr:", "eyr:", "hgt:", "hcl:", "ecl:", "pid:"];

    for(let i = 0; i < passports.length; i++){
      currentPassport = '';
      numValidFields = 0;
      if(passports[i] != ''){
        currentPassport = passports[i]
      }
      requiredFields.forEach((field) => {
        if(currentPassport.includes(field)){
          numValidFields++;
        }
      })
      if(numValidFields == 7){
        numValidPassports++;
      }
    }
    console.log(`PART 1: There are ${numValidPassports} valid passports.`);
});