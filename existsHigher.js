//let num = 0;

//function existsHigher(num) {
  //  let numArr = [];
    

  //  if(num > numArr.some(num)) {
   //     return true;
  //  } else if ( num < numArr.some(num)) {
  //      return false
  //  } else {
    //    return false;
  //  }

//}
    //console.log(existsHigher([5], 15))
    //console.log(existsHigher(3))
    //console.log(existsHigher(12))



function existsHigher(result) {

    let numArr = [1, 4, 5, 6, 7]
    
    if(result > numArr.every(e => e < result)) {
        return true
    } else if (result < numArr.every(e => e > result)) {
        return false
    }
}

    console.log(existsHigher(-2))
    console.log(existsHigher(10))
    console.log(existsHigher(15))
    console.log(existsHigher(2))
    
    

  //  let numArr = [1, 4, 5, 6, 7]

  //  let result = numbers.every( e  => e > result);

   // console.log(result(10));
