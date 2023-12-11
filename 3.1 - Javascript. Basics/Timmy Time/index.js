function changeTime(input, delta) {
    const [hours, mins] = input.split(':').map(Number);
    let totalMins = hours * 60 + mins;
  
    totalMins += delta; 
  
    let midNightInMinutes=24*60;

    if (totalMins >=  midNightInMinutes) {
        totalMins %=  midNightInMinutes;
    } else if (totalMins < 0) {
        totalMins = 
        (totalMins %  midNightInMinutes +  midNightInMinutes) 
        %  midNightInMinutes;
    }
  
    const newHours = Math.floor(totalMins / 60);
    const newMins = totalMins % 60;
  
    const formattedHours = String(newHours).padStart(2, '0');
    const formattedMins = String(newMins).padStart(2, '0');
  
    return `${formattedHours}:${formattedMins}`;
}



console.log(changeTime('10:00', 1)) //return '10:01'
console.log(changeTime('10:00',-1)) //return '09:59'
console.log(changeTime('23:59', 1)) //return '00:00'
console.log(changeTime('00:00', -1)) //return '23:59'