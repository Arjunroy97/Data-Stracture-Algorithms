/** Count largest sum of consercutive array
 * Problem -> 4
 * [1,2,3,4,3,5,4,6,7,8]  (Total element -> 10)
 * Condition : 
 * number of sum -> 4
 * Output -> 25;
 * number > array => error message
 * (10 - 4) + 1 = 7
 */

function findlargestSumValue( array, number){
    // check array 
    if(number > array){
        throw new Error("Number is Not Graterthen array")
    }else{
        let max = 0;
        for(let i= 0; i < (array.length - number) + 1; i++){
            let temp = 0;
            for(let j= 0; j < number; j++){
                temp += array[i+j];
            }
            if(temp > max){
                max = temp;
            }
        }
        return max;
    }
    
}
// O(n) lelian time complicity
const result = findlargestSumValue([1,2,3,4,3,5,4,6,7,8], 4);
console.log(result)