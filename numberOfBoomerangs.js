
const numArr = [];

const countBoomerangs =(arr) => {
    let first = [];
    let second = [];

    for (let i = 0; i < arr.length; i++)     {

        if(arr[i] === arr[i+2] && arr[i + 1 ] !== arr[i]) {
            (first.push(arr[i]));
            (first.push(arr[i+1]));
            (first.push(arr[i+2]));

            second.push(first);

            first = [];
        }
    }
    let third = second.length;
    return third;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
console.log(countBoomerangs([1, 7, 1, 7, "one", 7, 1]));
console.log(countBoomerangs([1, 7]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));