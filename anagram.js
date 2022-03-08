/** String Anagram
 * Problem -> 2
 * hello => lleho
 * {h:1,e:1,l:2,o:1} => {h:0,e:0,l:0,e:0}
 */

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