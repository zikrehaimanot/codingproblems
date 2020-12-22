const fs = require('fs');

const rows = fs.readFileSync('advent2.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let validPass = 0

rows.forEach(row =>{
    const {groups} = /^(?<min>\d+)-(?<max>\d+) (?<char>.): (?<password>.*)$/.exec(row);
    // console.log(groups);
    const counter = {};

    [...groups.password].forEach(char => {
      if(!counter[char]){
        counter[char] = 0
      }
      counter[char]++;
    });

    if(counter[groups.char] >= groups.min && counter[groups.char] <= groups.max){
      validPass++
    }
})

console.log(validPass);
