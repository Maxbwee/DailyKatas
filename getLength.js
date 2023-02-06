const getLength = (arr) => {
    let firstArray = arr.flat(Infinity);
    console.log(firstArray)

    let secondArray;

    if(arr.length = 0) {
        secondArray = 0;
    } else {
        secondArray = firstArray.length;
        return secondArray;
    }
}

console.log(getLength([1,[2,3]]))
console.log(getLength([1,[2,3],4,5]))
console.log(getLength([1,[2,3],4,5,[6]]))