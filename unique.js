/** Count unique value of Array
 * Problem -> 3
 * [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]  (Array sorted must)
 * Output -> 8;
 */

function arrayUniqueValueCount(arr){
// check array length
    if(arr.length > 0){
        let i = 0;
        for(let j = 1; j < arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    }else{
        throw new Error("Something is Wrong")
    }
}
// O(n) lelian time complicity
const result = arrayUniqueValueCount([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]);