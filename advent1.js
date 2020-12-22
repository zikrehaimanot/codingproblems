const fs = require('fs');

const row = fs.readFileSync('advent1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => parseInt(x));

console.log(row);

for (let i = 0; i < row.length; i++) {
  for (let j = i+1 ; j < row.length; j++) {
    if (row[i] + row[j] == 2020){
      console.log("part 1" + ' ' row[i] * row[j]);
    }
  }
}

for (let i = 0; i < row.length; i++) {
  for (let j = i+1 ; j < row.length; j++) {
    for (let k = j+1; k < row.length; k++) {
      if (row[i] + row[j] + row[k] == 2020){
        console.log("part 2" + ' ' row[i] * row[j] * row[k]);
      }
    }
  }
}
