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

## Problem -> 1

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
