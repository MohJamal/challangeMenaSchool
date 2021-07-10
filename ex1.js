/**Create a function that will reverse all the element inside a nested array

exp

[1,2,3,4] => [4,3,2,1]
[1,[2,3],4]=>[4,[3,2],1]
[9,[5,[10,30]],6]=> [6,[[30,10],5]9]
 
 */

function reverseNestedArray(array) {
  //TODO

  array.forEach((e) => {
    if (Array.isArray(e)) {
      reverseNestedArray(e);
    }
  });

  return array.reverse();
}

// let array = [1, 2, 3, 4];
//let array = [1, [2, 3], 4];
let array = [9, [5, [10, 30]], 6];

console.log(reverseNestedArray(array));

module.exports = reverseNestedArray;
