const date = new Date();

const [month, day, year] = [
  date.getMonth(),
  date.getDay(),
  date.getFullYear(),
];

console.log(month, day , year)

function howUnlucky(year) {
    let count = 0; 

    for(let month = 0; month <12; month++) {
        let d = new Date(year, month , 13); 
        if(d.getDay() == 5) {
            count++
        }
    }
    return count; 
}

console.log(howUnlucky(2020))