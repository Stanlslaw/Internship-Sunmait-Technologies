function isJubilee(year) {
  return new Date(year,6,25).getDay()==0
}
console.log( isJubilee(2020))
console.log( isJubilee(2021))

