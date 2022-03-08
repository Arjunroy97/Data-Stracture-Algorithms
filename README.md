# Data-Stracture-Algorithms

```comment
    /** Checking value sum Zero
    * Problem => 1
    * [4,-4] => Output
    */
```

## Checking value sum Zero

```javaScript

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
```
