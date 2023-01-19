
const array1 = ["a", "2a", "2b", "b"];
const array2 = ["y3ah", "budd1", "l1ght", "w3ight"]

function numInStr(arr) {
    
    let stringsWithNum = [];

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++){
            if(arr[i][j] >= '0' && arr[i][j] <= '9') {
                stringsWithNum.push(arr[i]);
                break;
            }
        }
    }   
    return stringsWithNum;
}

console.log(numInStr(array1));
console.log(numInStr(array2));
