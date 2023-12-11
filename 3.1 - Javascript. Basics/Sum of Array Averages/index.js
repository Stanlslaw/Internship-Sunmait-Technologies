const sumAverage = (arr) => {
    let result=0;
    arr.forEach(a=>{
      let avg;
       avg= a.reduce((prev,cur)=>{
        return prev+=cur;
      })/a.length;
      result+=avg;
    })
    return Math.floor(result);
}
console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])== 44)
console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])== -6)