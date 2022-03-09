# Data-Stracture-Algorithms

## Problem -> 1

```comment
    /** Checking value sum Zero
    * problem -> 1
    * [-5, -4, -3, -2, 0, 2, 4, 6, 8]
    * [4,-4] => Output
    */
```

## Checking value sum Zero

```javaScript

const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

// Use function
function arraysumValueZero(arr){
    for(let val of arr){
       for(let i = 1; i <= arr.length;i++){
           if(val + arr[i] === 0){
               return [val, arr[i]]
           }
       }
    }
}
// O(n^2) quadratic time complexity
const samValueResult = arraysumValueZero(array);

// method 2
function arraysumValueZero2(array){
    let left = 0;
    let right = array.length - 1;
    while(left < right){
        let sum = array[left] + array[right];
        if(sum === 0){
            return [array[left], array[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}
 // O(n) linear time complexity
const samValueResult2 = arraysumValueZero2(array);
console.log(samValueResult2)
```

## Problem -> 2

```commands
/** String Anagram
 * Problem -> 2
 * hello => lleho
 * {h:1,e:1,l:2,o:1}
 */
```

```javaScript
// use function
function strAnagram(str,str2){
    // length check
    if(str.length !== str.length){
        return false;
    }
    // irst letter for of loop use
    let count = {};
    for(let word of str){
        count[word] = (count[word] || 0) + 1;
        console.log(count[word])
    }
    // irst letter for of loop use
    for(let word2 of str2){
        if(!(count[word2])){
            return false;
        }
        count[word2] -= 1;
    }
    return true;
}
const string = strAnagram('hello','llheo')
console.log(string)
```

## Problem -> 3

```commends
/** Count unique value of Array
 * Problem -> 3
 * [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]  (Array sorted must)
 * Output -> 8;
 */
```

```javascript
function arrayUniqueValueCount(arr) {
  // check array length
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Something is Wrong");
  }
}
// O(n) lelian time complicity
const result = arrayUniqueValueCount([
  1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
]);
```

## Problem -> 4

```commends
    /** Count largest sum of consercutive array
    * Problem -> 4
    * [1,2,3,4,3,5,4,6,7,8]  (Total element -> 10)
    * Condition :
    * number of sum -> 4
    * Output -> 25;
    * number > array => error message
    * (10 - 4) + 1 = 7
    */
```

```javascript
function findlargestSumValue(array, number) {
  // check array
  if (number > array) {
    throw new Error("Number is Not Graterthen array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - number + 1; i++) {
      let temp = 0;
      for (let j = 0; j < number; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
// O(n) lelian time complicity
const result = findlargestSumValue([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
```
