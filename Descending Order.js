/* 7KU
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/


/* MY RESPONSE */
function descendingOrder(n){
    let arrNums = String(n);
    let arrStr = arrNums.split('')
    for(let i=0; i< arrStr.length;i++){
        arrStr[i] = Number(arrStr[i])
    }
    let result = arrStr.sort((a,b)=>{
        return a - b
    })
    return Number(result.reverse().join(''))
  }
/* END */

/* TOP RESPONSE */
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
/* END */
