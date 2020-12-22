const fs = require('fs')
let p1 = 0
fs.readFileSync('advent4.txt', { encoding: 'utf8' }).split('\n\n').forEach(x => {
  const b = x.split(/[ \n]/g).map(x => x.split(':'))
  const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

  let i = 0

  for (const a of b) {
    if (fields.includes(a[0])) i++
  }

  if (i >= 7) p1++
})

console.log(p1)
