/* 
The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )
*/

function firstNonConsecutive (arr) {
    let newArr = [];  
    let j = 0
    
    if(arr.length < 2){
      return null
    }
  
   for(let i=0;i<arr.length;i++){
     if(arr[i] !== arr[i+1]-1){
       newArr.push(arr[i+1])
     } else{
       j++
     }
   }
    if(j+1 == arr.length){
      return null
    }
    return newArr[0]
}

firstNonConsecutive([1,2,3,4,6,7,8])