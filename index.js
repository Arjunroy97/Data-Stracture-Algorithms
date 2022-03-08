console.clear();
/** Checking value sum Zero 
 * Problem => 1
 * [4,-4] => Output
 */
const array = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

// Use function 
function sumValue(arr){
    for(let val of arr){
       for(let i = 1; i <= arr.length;i++){
           if(val + arr[i] === 0){
               return [val, arr[i]]
           }
       }
    }
}
const samValueResult = sumValue(array);
console.log(samValueResult)