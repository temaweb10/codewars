/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function getIndex(arr){
    console.log(arr.indexOf(0))
    return arr.indexOf(0)
  }
  function moveZeros(arr) {
    let j = 0
    let arrFilter = arr.filter((element)=>{
      if(element === 0 ){
        j++
      }
      return element !== 0 
    })
  
    for(let i=0;i<j;i++){
      arrFilter.push(0)
    }
    return arrFilter
  }
  
  
  
  
  
  