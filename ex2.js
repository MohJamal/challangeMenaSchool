/**without using any kind of loops determine if an array contains an element N
in a nested array
example
array=[15,6,[5,1],[10,[20,[0]]]]
contains(array,0)=> return true

contains(array,-1)=> return false 

*/

let exist = false;

function isExist(arr, num) {
  /* Using looping */
  /*arr.forEach((e) => {
    if (e === num) {
      exist = true;
    } else if (Array.isArray(e)) {
      isExist(e, num);
    }
  });*/

  /* Using Recursion without using looping*/

  /*First thing I want to use recursion till 
  I can call isExist function at each element*/

  /* if there is an array inside the array call isExist with this array 
  as a parameter*/
  if (Array.isArray(arr[0])) {
    isExist(arr[0], num);
  }

  /* if first element is not the number that we want and is not the last element 
  at the array call isExist with the rest of array as parameter 
  without the first element*/

  if (arr[0] !== num && arr.length > 1) {
    isExist(arr.slice(1, arr.length), num);
  } else if (arr[0] === num) {
    /*If the first element is the number that we want => assign true to the global exist variable*/
    exist = true;
  }
}

let array = [15, 6, [5, 1], [10, [20, [0]]]];

isExist(array, 0);
console.log(exist);
