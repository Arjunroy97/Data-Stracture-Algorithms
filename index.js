console.clear();
/** Checking value sum Zero 
 * problem -> 1
 * [-5, -4, -3, -2, 0, 2, 4, 6, 8]
 * [4,-4] => Output
 */
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
const samValueResult2 = arraysumValueZero2(array); // O(n)
console.log(samValueResult2)