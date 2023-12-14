function isToday(date) {
   return date.toLocaleDateString()==new Date().toLocaleDateString();
}

console.log(isToday(new Date()))