

let num = 0;
let sum = 0;

const happyAlgorithm = (num) => {

    counter = 0;

    const numArray = Array.from(num.toString()).map(Number);

    numArray.forEach(element => {
        let transform = (element**2)
        
        sum += transform

        if (sum == 1) {
            counter++
            console.log("Happy " + counter)
        } 
        else if (sum > 1) {
            sum = numArray
            
            console.log(numArray)
            console.log(sum)
        }  

        
        //console.log(element)
        //console.log(transform)
        //console.log(sum)
    });

}
console.log(happyAlgorithm(35))
