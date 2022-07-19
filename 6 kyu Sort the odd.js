/* 
    Task
    You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

    Examples
    [7, 1]  =>  [1, 7]
    [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
/* my response */

function sortArray(array) {
    let chetnie = []
    let notchentine = []
    let indexs = []
    let numsNegative = []
    let arrFinal = []
    
    for(let i=0;i<array.length;i++){
      if(array[i] % 2 == 0){
        chetnie.push([{
          num: array[i],
          index: array.indexOf(array[i])
        }])
        
      } else {
        notchentine.push([{
          num: array[i],
          index: array.indexOf(array[i])
        }])
        indexs.push( array.indexOf(array[i]))
        numsNegative.push( array[i])
      }
      
    }
     indexs = indexs.sort((a,b)=>{
       return a + b
     })
     numsNegative = numsNegative.sort()
  
    for(let i=0;i<indexs.length;i++){
      arrFinal[indexs[i]] = numsNegative[i]
    }
  
    for(let i=0;i<chetnie.length;i++){
      console.log(chetnie[2])
        arrFinal[chetnie[i][0].index] = chetnie[i][0].num
    }
    
    return arrFinal
  }
  
  sortArray([5, 3, 2, 8, 1, 4]) 